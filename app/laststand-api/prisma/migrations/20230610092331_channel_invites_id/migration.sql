/*
  Warnings:

  - The primary key for the `channel_invites` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "channel_invites" DROP CONSTRAINT "channel_invites_pkey",
ADD CONSTRAINT "channel_invites_pkey" PRIMARY KEY ("user_name", "channel_name");
