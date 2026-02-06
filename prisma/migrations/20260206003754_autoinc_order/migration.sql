-- AlterTable
CREATE SEQUENCE tracklevel_order_seq;
ALTER TABLE "TrackLevel" ALTER COLUMN "order" SET DEFAULT nextval('tracklevel_order_seq');
ALTER SEQUENCE tracklevel_order_seq OWNED BY "TrackLevel"."order";
