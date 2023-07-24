import { Context, Schema } from "koishi";

export const name = "rollfd";
export const usage = "<rd | rf> [[l] [r]] [num=1]";
export interface Config {
  min_default: number;
  max_default: number;
  fix: number;
  minf_default: number;
  maxf_default: number;
}
export const Config: Schema<Config> = Schema.object({
  min_default: Schema.number().default(1).description("整数默认最小值"),
  max_default: Schema.number().default(100).description("整数默认最大值（含）"),
  minf_default: Schema.number().default(0).description("小数默认最小值"),
  maxf_default: Schema.number().default(1).description("小数默认最大值"),
  fix: Schema.number().default(6).description("保留小数位数"),
});

export function apply(ctx: Context, config: Config) {
  let [min, max, fix, minf, maxf] = [
    config.min_default,
    config.max_default,
    config.fix,
    config.minf_default,
    config.maxf_default,
  ];
  ctx
    .command("rd [...args]", "roll 整数")
    .usage("rd [[l] [r]] [num=1]")
    .action(async ({ session }, ...args) => {
      switch (args.length) {
        case 0:
          return rd(min, max).toString();
        case 1:
          return Array.apply(null, Array(parseInt(args[0])))
            .map((_) => rd(min, max))
            .join(" ");
        case 2:
          return rd(parseInt(args[0]), parseInt(args[1])).toString();
        case 3:
          return Array.apply(null, Array(parseInt(args[2])))
            .map((_) => rd(parseInt(args[0]), parseInt(args[1])))
            .join(" ");
        default:
          return "Invalid args";
      }
    });
  ctx
    .command("rf [...args]", "roll 小数")
    .usage("rf [[l] [r]] [num=1]")
    .action(async ({ session }, ...args) => {
      switch (args.length) {
        case 0:
          return rf(minf, maxf, fix);
        case 1:
          return Array.apply(null, Array(parseInt(args[0])))
            .map((_) => rf(minf, maxf, fix))
            .join(" ");
        case 2:
          return rf(parseFloat(args[0]), parseFloat(args[1]), fix);
        case 3:
          return Array.apply(null, Array(parseInt(args[2])))
            .map((_) => rf(parseFloat(args[0]), parseFloat(args[1]), fix))
            .join(" ");
        default:
          return "Invalid args";
      }
    });
}

function rd(min: number, max: number): number {
  if (min > max) [min, max] = [max, min];
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function rf(min: number, max: number, fix: number): string {
  if (min > max) [min, max] = [max, min];
  return (Math.random() * (max - min) + min).toFixed(fix);
}
