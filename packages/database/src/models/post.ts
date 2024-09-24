// ./packages/database/src/models/post.ts

import { PrismaClient, Post } from "@prisma/client";
import { hashBuffer } from "../utils/hash"
import * as proto from "@code-blog/api";

const prisma = new PrismaClient();

const toProto = (post: Post) : proto.Post => {
    return new proto.Post({
        id: post.id,
        ownerId: post.ownerId,

        imageId: post.imageId ?? undefined,
        contentId: post.contentId,

        title: post.title,
        short: post.short,
        slug: post.slug,

        price: post.price,
        paymentAddress: post.paymentAddress,
        hasPaywall: post.hasPaywall,

        createdAt: post.createdAt.toISOString(),
    });
};

interface CreatePostOpts {
  ownerId: string;
  title: string;
  short: string;
  imageId?: string;
  slug: string;
  price: string;
  paymentAddress: string;
  hasPaywall: boolean;
}

async function createPost(opt: CreatePostOpts, content: string): Promise<Post> {
    const key = "post";
    const buf = Buffer.from(content);
    const hash = hashBuffer(buf).toString("base64");

    const record = await prisma.post.create({
        data: {
            owner: { connect: { id: opt.ownerId, }, },

            title: opt.title,
            short: opt.short,
            price: opt.price,
            slug: opt.slug,
            paymentAddress: opt.paymentAddress,
            hasPaywall: opt.hasPaywall,

            image: opt.imageId ? { connect: { id: opt.imageId, }, } : undefined,

            content: {
                create: {
                    key: key,
                    value: buf,
                    hash: hash,
                    owner: { connect: { id: opt.ownerId, }, }
                },
            },
        },
    });
  return record;
}       

async function getPostById(postId: string): Promise<Post | null> {
  const record = await prisma.post.findUnique({
    where: {
      id: postId,
    },
  });
  return record;
}

async function getPostBySlug(slug: string): Promise<Post | null> {
  const record = await prisma.post.findUnique({
    where: {
      slug: slug,
    },
  });
  return record;
}

interface GetPaginatedPostsOpts {
    page: number;
    pageSize: number;
}

async function getPaginatedPosts(ownerId: string | undefined, opts: GetPaginatedPostsOpts): Promise<Post[]> {
  console.log(`Getting paginated posts. ownerId: ${ownerId}, page: ${opts.page}, pageSize: ${opts.pageSize}`);
  
  const whereClause: any = {};
  if (ownerId) {
    whereClause.ownerId = ownerId;
  }

  console.log('Where clause:', whereClause);

  const records = await prisma.post.findMany({
    where: whereClause,
    skip: (opts.page - 1) * opts.pageSize,
    take: opts.pageSize,
    orderBy: {
      createdAt: 'desc'
    }
  });

  console.log(`Found ${records.length} posts`);
  console.log('Posts:', records);
  return records;
}

async function getPostCountByOwner(ownerId: string): Promise<number> {
    const count = await prisma.post.count({
        where: {
            ownerId: ownerId,
        },
    });

    return count;
}

async function getPostCount(): Promise<number> {
    const count = await prisma.post.count();
    return count;
}

export {
  toProto,

  createPost,
  getPostById,
  getPostBySlug,
  getPaginatedPosts,

  getPostCount,
  getPostCountByOwner,

};