-- AlterTable
CREATE SEQUENCE levelmodule_order_seq;
ALTER TABLE "LevelModule" ALTER COLUMN "order" SET DEFAULT nextval('levelmodule_order_seq');
ALTER SEQUENCE levelmodule_order_seq OWNED BY "LevelModule"."order";
