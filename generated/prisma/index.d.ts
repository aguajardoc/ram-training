
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Problem
 * This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
 * This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.
 */
export type Problem = $Result.DefaultSelection<Prisma.$ProblemPayload>
/**
 * Model Track
 * 
 */
export type Track = $Result.DefaultSelection<Prisma.$TrackPayload>
/**
 * Model TrackLevel
 * 
 */
export type TrackLevel = $Result.DefaultSelection<Prisma.$TrackLevelPayload>
/**
 * Model LevelModule
 * 
 */
export type LevelModule = $Result.DefaultSelection<Prisma.$LevelModulePayload>
/**
 * Model Module
 * 
 */
export type Module = $Result.DefaultSelection<Prisma.$ModulePayload>
/**
 * Model ModuleProblem
 * 
 */
export type ModuleProblem = $Result.DefaultSelection<Prisma.$ModuleProblemPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Solve
 * 
 */
export type Solve = $Result.DefaultSelection<Prisma.$SolvePayload>
/**
 * Model UserTrack
 * 
 */
export type UserTrack = $Result.DefaultSelection<Prisma.$UserTrackPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const ProblemDifficulty: {
  EASY: 'EASY',
  NORMAL: 'NORMAL',
  HARD: 'HARD'
};

export type ProblemDifficulty = (typeof ProblemDifficulty)[keyof typeof ProblemDifficulty]


export const ProblemType: {
  PRACTICE: 'PRACTICE',
  CONTEST: 'CONTEST'
};

export type ProblemType = (typeof ProblemType)[keyof typeof ProblemType]

}

export type ProblemDifficulty = $Enums.ProblemDifficulty

export const ProblemDifficulty: typeof $Enums.ProblemDifficulty

export type ProblemType = $Enums.ProblemType

export const ProblemType: typeof $Enums.ProblemType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Problems
 * const problems = await prisma.problem.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Problems
   * const problems = await prisma.problem.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.problem`: Exposes CRUD operations for the **Problem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Problems
    * const problems = await prisma.problem.findMany()
    * ```
    */
  get problem(): Prisma.ProblemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.track`: Exposes CRUD operations for the **Track** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tracks
    * const tracks = await prisma.track.findMany()
    * ```
    */
  get track(): Prisma.TrackDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.trackLevel`: Exposes CRUD operations for the **TrackLevel** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TrackLevels
    * const trackLevels = await prisma.trackLevel.findMany()
    * ```
    */
  get trackLevel(): Prisma.TrackLevelDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.levelModule`: Exposes CRUD operations for the **LevelModule** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LevelModules
    * const levelModules = await prisma.levelModule.findMany()
    * ```
    */
  get levelModule(): Prisma.LevelModuleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.module`: Exposes CRUD operations for the **Module** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Modules
    * const modules = await prisma.module.findMany()
    * ```
    */
  get module(): Prisma.ModuleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.moduleProblem`: Exposes CRUD operations for the **ModuleProblem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ModuleProblems
    * const moduleProblems = await prisma.moduleProblem.findMany()
    * ```
    */
  get moduleProblem(): Prisma.ModuleProblemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.solve`: Exposes CRUD operations for the **Solve** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Solves
    * const solves = await prisma.solve.findMany()
    * ```
    */
  get solve(): Prisma.SolveDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userTrack`: Exposes CRUD operations for the **UserTrack** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserTracks
    * const userTracks = await prisma.userTrack.findMany()
    * ```
    */
  get userTrack(): Prisma.UserTrackDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.1
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Problem: 'Problem',
    Track: 'Track',
    TrackLevel: 'TrackLevel',
    LevelModule: 'LevelModule',
    Module: 'Module',
    ModuleProblem: 'ModuleProblem',
    User: 'User',
    Solve: 'Solve',
    UserTrack: 'UserTrack'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "problem" | "track" | "trackLevel" | "levelModule" | "module" | "moduleProblem" | "user" | "solve" | "userTrack"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Problem: {
        payload: Prisma.$ProblemPayload<ExtArgs>
        fields: Prisma.ProblemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProblemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProblemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemPayload>
          }
          findFirst: {
            args: Prisma.ProblemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProblemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemPayload>
          }
          findMany: {
            args: Prisma.ProblemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemPayload>[]
          }
          create: {
            args: Prisma.ProblemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemPayload>
          }
          createMany: {
            args: Prisma.ProblemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProblemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemPayload>[]
          }
          delete: {
            args: Prisma.ProblemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemPayload>
          }
          update: {
            args: Prisma.ProblemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemPayload>
          }
          deleteMany: {
            args: Prisma.ProblemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProblemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProblemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemPayload>[]
          }
          upsert: {
            args: Prisma.ProblemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemPayload>
          }
          aggregate: {
            args: Prisma.ProblemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProblem>
          }
          groupBy: {
            args: Prisma.ProblemGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProblemGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProblemCountArgs<ExtArgs>
            result: $Utils.Optional<ProblemCountAggregateOutputType> | number
          }
        }
      }
      Track: {
        payload: Prisma.$TrackPayload<ExtArgs>
        fields: Prisma.TrackFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TrackFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TrackFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackPayload>
          }
          findFirst: {
            args: Prisma.TrackFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TrackFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackPayload>
          }
          findMany: {
            args: Prisma.TrackFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackPayload>[]
          }
          create: {
            args: Prisma.TrackCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackPayload>
          }
          createMany: {
            args: Prisma.TrackCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TrackCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackPayload>[]
          }
          delete: {
            args: Prisma.TrackDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackPayload>
          }
          update: {
            args: Prisma.TrackUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackPayload>
          }
          deleteMany: {
            args: Prisma.TrackDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TrackUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TrackUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackPayload>[]
          }
          upsert: {
            args: Prisma.TrackUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackPayload>
          }
          aggregate: {
            args: Prisma.TrackAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTrack>
          }
          groupBy: {
            args: Prisma.TrackGroupByArgs<ExtArgs>
            result: $Utils.Optional<TrackGroupByOutputType>[]
          }
          count: {
            args: Prisma.TrackCountArgs<ExtArgs>
            result: $Utils.Optional<TrackCountAggregateOutputType> | number
          }
        }
      }
      TrackLevel: {
        payload: Prisma.$TrackLevelPayload<ExtArgs>
        fields: Prisma.TrackLevelFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TrackLevelFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackLevelPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TrackLevelFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackLevelPayload>
          }
          findFirst: {
            args: Prisma.TrackLevelFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackLevelPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TrackLevelFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackLevelPayload>
          }
          findMany: {
            args: Prisma.TrackLevelFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackLevelPayload>[]
          }
          create: {
            args: Prisma.TrackLevelCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackLevelPayload>
          }
          createMany: {
            args: Prisma.TrackLevelCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TrackLevelCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackLevelPayload>[]
          }
          delete: {
            args: Prisma.TrackLevelDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackLevelPayload>
          }
          update: {
            args: Prisma.TrackLevelUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackLevelPayload>
          }
          deleteMany: {
            args: Prisma.TrackLevelDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TrackLevelUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TrackLevelUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackLevelPayload>[]
          }
          upsert: {
            args: Prisma.TrackLevelUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackLevelPayload>
          }
          aggregate: {
            args: Prisma.TrackLevelAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTrackLevel>
          }
          groupBy: {
            args: Prisma.TrackLevelGroupByArgs<ExtArgs>
            result: $Utils.Optional<TrackLevelGroupByOutputType>[]
          }
          count: {
            args: Prisma.TrackLevelCountArgs<ExtArgs>
            result: $Utils.Optional<TrackLevelCountAggregateOutputType> | number
          }
        }
      }
      LevelModule: {
        payload: Prisma.$LevelModulePayload<ExtArgs>
        fields: Prisma.LevelModuleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LevelModuleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LevelModulePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LevelModuleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LevelModulePayload>
          }
          findFirst: {
            args: Prisma.LevelModuleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LevelModulePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LevelModuleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LevelModulePayload>
          }
          findMany: {
            args: Prisma.LevelModuleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LevelModulePayload>[]
          }
          create: {
            args: Prisma.LevelModuleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LevelModulePayload>
          }
          createMany: {
            args: Prisma.LevelModuleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LevelModuleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LevelModulePayload>[]
          }
          delete: {
            args: Prisma.LevelModuleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LevelModulePayload>
          }
          update: {
            args: Prisma.LevelModuleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LevelModulePayload>
          }
          deleteMany: {
            args: Prisma.LevelModuleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LevelModuleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LevelModuleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LevelModulePayload>[]
          }
          upsert: {
            args: Prisma.LevelModuleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LevelModulePayload>
          }
          aggregate: {
            args: Prisma.LevelModuleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLevelModule>
          }
          groupBy: {
            args: Prisma.LevelModuleGroupByArgs<ExtArgs>
            result: $Utils.Optional<LevelModuleGroupByOutputType>[]
          }
          count: {
            args: Prisma.LevelModuleCountArgs<ExtArgs>
            result: $Utils.Optional<LevelModuleCountAggregateOutputType> | number
          }
        }
      }
      Module: {
        payload: Prisma.$ModulePayload<ExtArgs>
        fields: Prisma.ModuleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ModuleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModulePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ModuleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModulePayload>
          }
          findFirst: {
            args: Prisma.ModuleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModulePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ModuleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModulePayload>
          }
          findMany: {
            args: Prisma.ModuleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModulePayload>[]
          }
          create: {
            args: Prisma.ModuleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModulePayload>
          }
          createMany: {
            args: Prisma.ModuleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ModuleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModulePayload>[]
          }
          delete: {
            args: Prisma.ModuleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModulePayload>
          }
          update: {
            args: Prisma.ModuleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModulePayload>
          }
          deleteMany: {
            args: Prisma.ModuleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ModuleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ModuleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModulePayload>[]
          }
          upsert: {
            args: Prisma.ModuleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModulePayload>
          }
          aggregate: {
            args: Prisma.ModuleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateModule>
          }
          groupBy: {
            args: Prisma.ModuleGroupByArgs<ExtArgs>
            result: $Utils.Optional<ModuleGroupByOutputType>[]
          }
          count: {
            args: Prisma.ModuleCountArgs<ExtArgs>
            result: $Utils.Optional<ModuleCountAggregateOutputType> | number
          }
        }
      }
      ModuleProblem: {
        payload: Prisma.$ModuleProblemPayload<ExtArgs>
        fields: Prisma.ModuleProblemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ModuleProblemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModuleProblemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ModuleProblemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModuleProblemPayload>
          }
          findFirst: {
            args: Prisma.ModuleProblemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModuleProblemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ModuleProblemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModuleProblemPayload>
          }
          findMany: {
            args: Prisma.ModuleProblemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModuleProblemPayload>[]
          }
          create: {
            args: Prisma.ModuleProblemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModuleProblemPayload>
          }
          createMany: {
            args: Prisma.ModuleProblemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ModuleProblemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModuleProblemPayload>[]
          }
          delete: {
            args: Prisma.ModuleProblemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModuleProblemPayload>
          }
          update: {
            args: Prisma.ModuleProblemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModuleProblemPayload>
          }
          deleteMany: {
            args: Prisma.ModuleProblemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ModuleProblemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ModuleProblemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModuleProblemPayload>[]
          }
          upsert: {
            args: Prisma.ModuleProblemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModuleProblemPayload>
          }
          aggregate: {
            args: Prisma.ModuleProblemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateModuleProblem>
          }
          groupBy: {
            args: Prisma.ModuleProblemGroupByArgs<ExtArgs>
            result: $Utils.Optional<ModuleProblemGroupByOutputType>[]
          }
          count: {
            args: Prisma.ModuleProblemCountArgs<ExtArgs>
            result: $Utils.Optional<ModuleProblemCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Solve: {
        payload: Prisma.$SolvePayload<ExtArgs>
        fields: Prisma.SolveFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SolveFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolvePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SolveFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolvePayload>
          }
          findFirst: {
            args: Prisma.SolveFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolvePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SolveFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolvePayload>
          }
          findMany: {
            args: Prisma.SolveFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolvePayload>[]
          }
          create: {
            args: Prisma.SolveCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolvePayload>
          }
          createMany: {
            args: Prisma.SolveCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SolveCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolvePayload>[]
          }
          delete: {
            args: Prisma.SolveDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolvePayload>
          }
          update: {
            args: Prisma.SolveUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolvePayload>
          }
          deleteMany: {
            args: Prisma.SolveDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SolveUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SolveUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolvePayload>[]
          }
          upsert: {
            args: Prisma.SolveUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolvePayload>
          }
          aggregate: {
            args: Prisma.SolveAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSolve>
          }
          groupBy: {
            args: Prisma.SolveGroupByArgs<ExtArgs>
            result: $Utils.Optional<SolveGroupByOutputType>[]
          }
          count: {
            args: Prisma.SolveCountArgs<ExtArgs>
            result: $Utils.Optional<SolveCountAggregateOutputType> | number
          }
        }
      }
      UserTrack: {
        payload: Prisma.$UserTrackPayload<ExtArgs>
        fields: Prisma.UserTrackFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserTrackFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTrackPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserTrackFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTrackPayload>
          }
          findFirst: {
            args: Prisma.UserTrackFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTrackPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserTrackFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTrackPayload>
          }
          findMany: {
            args: Prisma.UserTrackFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTrackPayload>[]
          }
          create: {
            args: Prisma.UserTrackCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTrackPayload>
          }
          createMany: {
            args: Prisma.UserTrackCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserTrackCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTrackPayload>[]
          }
          delete: {
            args: Prisma.UserTrackDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTrackPayload>
          }
          update: {
            args: Prisma.UserTrackUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTrackPayload>
          }
          deleteMany: {
            args: Prisma.UserTrackDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserTrackUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserTrackUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTrackPayload>[]
          }
          upsert: {
            args: Prisma.UserTrackUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTrackPayload>
          }
          aggregate: {
            args: Prisma.UserTrackAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserTrack>
          }
          groupBy: {
            args: Prisma.UserTrackGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserTrackGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserTrackCountArgs<ExtArgs>
            result: $Utils.Optional<UserTrackCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    problem?: ProblemOmit
    track?: TrackOmit
    trackLevel?: TrackLevelOmit
    levelModule?: LevelModuleOmit
    module?: ModuleOmit
    moduleProblem?: ModuleProblemOmit
    user?: UserOmit
    solve?: SolveOmit
    userTrack?: UserTrackOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ProblemCountOutputType
   */

  export type ProblemCountOutputType = {
    solves: number
  }

  export type ProblemCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    solves?: boolean | ProblemCountOutputTypeCountSolvesArgs
  }

  // Custom InputTypes
  /**
   * ProblemCountOutputType without action
   */
  export type ProblemCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProblemCountOutputType
     */
    select?: ProblemCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProblemCountOutputType without action
   */
  export type ProblemCountOutputTypeCountSolvesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SolveWhereInput
  }


  /**
   * Count Type TrackCountOutputType
   */

  export type TrackCountOutputType = {
    levels: number
    userTrack: number
  }

  export type TrackCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    levels?: boolean | TrackCountOutputTypeCountLevelsArgs
    userTrack?: boolean | TrackCountOutputTypeCountUserTrackArgs
  }

  // Custom InputTypes
  /**
   * TrackCountOutputType without action
   */
  export type TrackCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackCountOutputType
     */
    select?: TrackCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TrackCountOutputType without action
   */
  export type TrackCountOutputTypeCountLevelsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TrackLevelWhereInput
  }

  /**
   * TrackCountOutputType without action
   */
  export type TrackCountOutputTypeCountUserTrackArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserTrackWhereInput
  }


  /**
   * Count Type TrackLevelCountOutputType
   */

  export type TrackLevelCountOutputType = {
    levelModules: number
  }

  export type TrackLevelCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    levelModules?: boolean | TrackLevelCountOutputTypeCountLevelModulesArgs
  }

  // Custom InputTypes
  /**
   * TrackLevelCountOutputType without action
   */
  export type TrackLevelCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackLevelCountOutputType
     */
    select?: TrackLevelCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TrackLevelCountOutputType without action
   */
  export type TrackLevelCountOutputTypeCountLevelModulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LevelModuleWhereInput
  }


  /**
   * Count Type ModuleCountOutputType
   */

  export type ModuleCountOutputType = {
    moduleProblems: number
    levelModules: number
  }

  export type ModuleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    moduleProblems?: boolean | ModuleCountOutputTypeCountModuleProblemsArgs
    levelModules?: boolean | ModuleCountOutputTypeCountLevelModulesArgs
  }

  // Custom InputTypes
  /**
   * ModuleCountOutputType without action
   */
  export type ModuleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModuleCountOutputType
     */
    select?: ModuleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ModuleCountOutputType without action
   */
  export type ModuleCountOutputTypeCountModuleProblemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ModuleProblemWhereInput
  }

  /**
   * ModuleCountOutputType without action
   */
  export type ModuleCountOutputTypeCountLevelModulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LevelModuleWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    solves: number
    userTracks: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    solves?: boolean | UserCountOutputTypeCountSolvesArgs
    userTracks?: boolean | UserCountOutputTypeCountUserTracksArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSolvesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SolveWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUserTracksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserTrackWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Problem
   */

  export type AggregateProblem = {
    _count: ProblemCountAggregateOutputType | null
    _avg: ProblemAvgAggregateOutputType | null
    _sum: ProblemSumAggregateOutputType | null
    _min: ProblemMinAggregateOutputType | null
    _max: ProblemMaxAggregateOutputType | null
  }

  export type ProblemAvgAggregateOutputType = {
    id: number | null
  }

  export type ProblemSumAggregateOutputType = {
    id: bigint | null
  }

  export type ProblemMinAggregateOutputType = {
    id: bigint | null
    name: string | null
    url: string | null
  }

  export type ProblemMaxAggregateOutputType = {
    id: bigint | null
    name: string | null
    url: string | null
  }

  export type ProblemCountAggregateOutputType = {
    id: number
    name: number
    url: number
    _all: number
  }


  export type ProblemAvgAggregateInputType = {
    id?: true
  }

  export type ProblemSumAggregateInputType = {
    id?: true
  }

  export type ProblemMinAggregateInputType = {
    id?: true
    name?: true
    url?: true
  }

  export type ProblemMaxAggregateInputType = {
    id?: true
    name?: true
    url?: true
  }

  export type ProblemCountAggregateInputType = {
    id?: true
    name?: true
    url?: true
    _all?: true
  }

  export type ProblemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Problem to aggregate.
     */
    where?: ProblemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Problems to fetch.
     */
    orderBy?: ProblemOrderByWithRelationInput | ProblemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProblemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Problems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Problems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Problems
    **/
    _count?: true | ProblemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProblemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProblemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProblemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProblemMaxAggregateInputType
  }

  export type GetProblemAggregateType<T extends ProblemAggregateArgs> = {
        [P in keyof T & keyof AggregateProblem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProblem[P]>
      : GetScalarType<T[P], AggregateProblem[P]>
  }




  export type ProblemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProblemWhereInput
    orderBy?: ProblemOrderByWithAggregationInput | ProblemOrderByWithAggregationInput[]
    by: ProblemScalarFieldEnum[] | ProblemScalarFieldEnum
    having?: ProblemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProblemCountAggregateInputType | true
    _avg?: ProblemAvgAggregateInputType
    _sum?: ProblemSumAggregateInputType
    _min?: ProblemMinAggregateInputType
    _max?: ProblemMaxAggregateInputType
  }

  export type ProblemGroupByOutputType = {
    id: bigint
    name: string
    url: string
    _count: ProblemCountAggregateOutputType | null
    _avg: ProblemAvgAggregateOutputType | null
    _sum: ProblemSumAggregateOutputType | null
    _min: ProblemMinAggregateOutputType | null
    _max: ProblemMaxAggregateOutputType | null
  }

  type GetProblemGroupByPayload<T extends ProblemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProblemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProblemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProblemGroupByOutputType[P]>
            : GetScalarType<T[P], ProblemGroupByOutputType[P]>
        }
      >
    >


  export type ProblemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    url?: boolean
    solves?: boolean | Problem$solvesArgs<ExtArgs>
    _count?: boolean | ProblemCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["problem"]>

  export type ProblemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    url?: boolean
  }, ExtArgs["result"]["problem"]>

  export type ProblemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    url?: boolean
  }, ExtArgs["result"]["problem"]>

  export type ProblemSelectScalar = {
    id?: boolean
    name?: boolean
    url?: boolean
  }

  export type ProblemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "url", ExtArgs["result"]["problem"]>
  export type ProblemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    solves?: boolean | Problem$solvesArgs<ExtArgs>
    _count?: boolean | ProblemCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProblemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ProblemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ProblemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Problem"
    objects: {
      solves: Prisma.$SolvePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      name: string
      url: string
    }, ExtArgs["result"]["problem"]>
    composites: {}
  }

  type ProblemGetPayload<S extends boolean | null | undefined | ProblemDefaultArgs> = $Result.GetResult<Prisma.$ProblemPayload, S>

  type ProblemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProblemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProblemCountAggregateInputType | true
    }

  export interface ProblemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Problem'], meta: { name: 'Problem' } }
    /**
     * Find zero or one Problem that matches the filter.
     * @param {ProblemFindUniqueArgs} args - Arguments to find a Problem
     * @example
     * // Get one Problem
     * const problem = await prisma.problem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProblemFindUniqueArgs>(args: SelectSubset<T, ProblemFindUniqueArgs<ExtArgs>>): Prisma__ProblemClient<$Result.GetResult<Prisma.$ProblemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Problem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProblemFindUniqueOrThrowArgs} args - Arguments to find a Problem
     * @example
     * // Get one Problem
     * const problem = await prisma.problem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProblemFindUniqueOrThrowArgs>(args: SelectSubset<T, ProblemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProblemClient<$Result.GetResult<Prisma.$ProblemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Problem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemFindFirstArgs} args - Arguments to find a Problem
     * @example
     * // Get one Problem
     * const problem = await prisma.problem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProblemFindFirstArgs>(args?: SelectSubset<T, ProblemFindFirstArgs<ExtArgs>>): Prisma__ProblemClient<$Result.GetResult<Prisma.$ProblemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Problem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemFindFirstOrThrowArgs} args - Arguments to find a Problem
     * @example
     * // Get one Problem
     * const problem = await prisma.problem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProblemFindFirstOrThrowArgs>(args?: SelectSubset<T, ProblemFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProblemClient<$Result.GetResult<Prisma.$ProblemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Problems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Problems
     * const problems = await prisma.problem.findMany()
     * 
     * // Get first 10 Problems
     * const problems = await prisma.problem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const problemWithIdOnly = await prisma.problem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProblemFindManyArgs>(args?: SelectSubset<T, ProblemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProblemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Problem.
     * @param {ProblemCreateArgs} args - Arguments to create a Problem.
     * @example
     * // Create one Problem
     * const Problem = await prisma.problem.create({
     *   data: {
     *     // ... data to create a Problem
     *   }
     * })
     * 
     */
    create<T extends ProblemCreateArgs>(args: SelectSubset<T, ProblemCreateArgs<ExtArgs>>): Prisma__ProblemClient<$Result.GetResult<Prisma.$ProblemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Problems.
     * @param {ProblemCreateManyArgs} args - Arguments to create many Problems.
     * @example
     * // Create many Problems
     * const problem = await prisma.problem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProblemCreateManyArgs>(args?: SelectSubset<T, ProblemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Problems and returns the data saved in the database.
     * @param {ProblemCreateManyAndReturnArgs} args - Arguments to create many Problems.
     * @example
     * // Create many Problems
     * const problem = await prisma.problem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Problems and only return the `id`
     * const problemWithIdOnly = await prisma.problem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProblemCreateManyAndReturnArgs>(args?: SelectSubset<T, ProblemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProblemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Problem.
     * @param {ProblemDeleteArgs} args - Arguments to delete one Problem.
     * @example
     * // Delete one Problem
     * const Problem = await prisma.problem.delete({
     *   where: {
     *     // ... filter to delete one Problem
     *   }
     * })
     * 
     */
    delete<T extends ProblemDeleteArgs>(args: SelectSubset<T, ProblemDeleteArgs<ExtArgs>>): Prisma__ProblemClient<$Result.GetResult<Prisma.$ProblemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Problem.
     * @param {ProblemUpdateArgs} args - Arguments to update one Problem.
     * @example
     * // Update one Problem
     * const problem = await prisma.problem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProblemUpdateArgs>(args: SelectSubset<T, ProblemUpdateArgs<ExtArgs>>): Prisma__ProblemClient<$Result.GetResult<Prisma.$ProblemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Problems.
     * @param {ProblemDeleteManyArgs} args - Arguments to filter Problems to delete.
     * @example
     * // Delete a few Problems
     * const { count } = await prisma.problem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProblemDeleteManyArgs>(args?: SelectSubset<T, ProblemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Problems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Problems
     * const problem = await prisma.problem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProblemUpdateManyArgs>(args: SelectSubset<T, ProblemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Problems and returns the data updated in the database.
     * @param {ProblemUpdateManyAndReturnArgs} args - Arguments to update many Problems.
     * @example
     * // Update many Problems
     * const problem = await prisma.problem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Problems and only return the `id`
     * const problemWithIdOnly = await prisma.problem.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProblemUpdateManyAndReturnArgs>(args: SelectSubset<T, ProblemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProblemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Problem.
     * @param {ProblemUpsertArgs} args - Arguments to update or create a Problem.
     * @example
     * // Update or create a Problem
     * const problem = await prisma.problem.upsert({
     *   create: {
     *     // ... data to create a Problem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Problem we want to update
     *   }
     * })
     */
    upsert<T extends ProblemUpsertArgs>(args: SelectSubset<T, ProblemUpsertArgs<ExtArgs>>): Prisma__ProblemClient<$Result.GetResult<Prisma.$ProblemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Problems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemCountArgs} args - Arguments to filter Problems to count.
     * @example
     * // Count the number of Problems
     * const count = await prisma.problem.count({
     *   where: {
     *     // ... the filter for the Problems we want to count
     *   }
     * })
    **/
    count<T extends ProblemCountArgs>(
      args?: Subset<T, ProblemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProblemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Problem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProblemAggregateArgs>(args: Subset<T, ProblemAggregateArgs>): Prisma.PrismaPromise<GetProblemAggregateType<T>>

    /**
     * Group by Problem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProblemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProblemGroupByArgs['orderBy'] }
        : { orderBy?: ProblemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProblemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProblemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Problem model
   */
  readonly fields: ProblemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Problem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProblemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    solves<T extends Problem$solvesArgs<ExtArgs> = {}>(args?: Subset<T, Problem$solvesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SolvePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Problem model
   */
  interface ProblemFieldRefs {
    readonly id: FieldRef<"Problem", 'BigInt'>
    readonly name: FieldRef<"Problem", 'String'>
    readonly url: FieldRef<"Problem", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Problem findUnique
   */
  export type ProblemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Problem
     */
    select?: ProblemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Problem
     */
    omit?: ProblemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInclude<ExtArgs> | null
    /**
     * Filter, which Problem to fetch.
     */
    where: ProblemWhereUniqueInput
  }

  /**
   * Problem findUniqueOrThrow
   */
  export type ProblemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Problem
     */
    select?: ProblemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Problem
     */
    omit?: ProblemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInclude<ExtArgs> | null
    /**
     * Filter, which Problem to fetch.
     */
    where: ProblemWhereUniqueInput
  }

  /**
   * Problem findFirst
   */
  export type ProblemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Problem
     */
    select?: ProblemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Problem
     */
    omit?: ProblemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInclude<ExtArgs> | null
    /**
     * Filter, which Problem to fetch.
     */
    where?: ProblemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Problems to fetch.
     */
    orderBy?: ProblemOrderByWithRelationInput | ProblemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Problems.
     */
    cursor?: ProblemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Problems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Problems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Problems.
     */
    distinct?: ProblemScalarFieldEnum | ProblemScalarFieldEnum[]
  }

  /**
   * Problem findFirstOrThrow
   */
  export type ProblemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Problem
     */
    select?: ProblemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Problem
     */
    omit?: ProblemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInclude<ExtArgs> | null
    /**
     * Filter, which Problem to fetch.
     */
    where?: ProblemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Problems to fetch.
     */
    orderBy?: ProblemOrderByWithRelationInput | ProblemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Problems.
     */
    cursor?: ProblemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Problems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Problems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Problems.
     */
    distinct?: ProblemScalarFieldEnum | ProblemScalarFieldEnum[]
  }

  /**
   * Problem findMany
   */
  export type ProblemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Problem
     */
    select?: ProblemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Problem
     */
    omit?: ProblemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInclude<ExtArgs> | null
    /**
     * Filter, which Problems to fetch.
     */
    where?: ProblemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Problems to fetch.
     */
    orderBy?: ProblemOrderByWithRelationInput | ProblemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Problems.
     */
    cursor?: ProblemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Problems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Problems.
     */
    skip?: number
    distinct?: ProblemScalarFieldEnum | ProblemScalarFieldEnum[]
  }

  /**
   * Problem create
   */
  export type ProblemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Problem
     */
    select?: ProblemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Problem
     */
    omit?: ProblemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInclude<ExtArgs> | null
    /**
     * The data needed to create a Problem.
     */
    data?: XOR<ProblemCreateInput, ProblemUncheckedCreateInput>
  }

  /**
   * Problem createMany
   */
  export type ProblemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Problems.
     */
    data: ProblemCreateManyInput | ProblemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Problem createManyAndReturn
   */
  export type ProblemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Problem
     */
    select?: ProblemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Problem
     */
    omit?: ProblemOmit<ExtArgs> | null
    /**
     * The data used to create many Problems.
     */
    data: ProblemCreateManyInput | ProblemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Problem update
   */
  export type ProblemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Problem
     */
    select?: ProblemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Problem
     */
    omit?: ProblemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInclude<ExtArgs> | null
    /**
     * The data needed to update a Problem.
     */
    data: XOR<ProblemUpdateInput, ProblemUncheckedUpdateInput>
    /**
     * Choose, which Problem to update.
     */
    where: ProblemWhereUniqueInput
  }

  /**
   * Problem updateMany
   */
  export type ProblemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Problems.
     */
    data: XOR<ProblemUpdateManyMutationInput, ProblemUncheckedUpdateManyInput>
    /**
     * Filter which Problems to update
     */
    where?: ProblemWhereInput
    /**
     * Limit how many Problems to update.
     */
    limit?: number
  }

  /**
   * Problem updateManyAndReturn
   */
  export type ProblemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Problem
     */
    select?: ProblemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Problem
     */
    omit?: ProblemOmit<ExtArgs> | null
    /**
     * The data used to update Problems.
     */
    data: XOR<ProblemUpdateManyMutationInput, ProblemUncheckedUpdateManyInput>
    /**
     * Filter which Problems to update
     */
    where?: ProblemWhereInput
    /**
     * Limit how many Problems to update.
     */
    limit?: number
  }

  /**
   * Problem upsert
   */
  export type ProblemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Problem
     */
    select?: ProblemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Problem
     */
    omit?: ProblemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInclude<ExtArgs> | null
    /**
     * The filter to search for the Problem to update in case it exists.
     */
    where: ProblemWhereUniqueInput
    /**
     * In case the Problem found by the `where` argument doesn't exist, create a new Problem with this data.
     */
    create: XOR<ProblemCreateInput, ProblemUncheckedCreateInput>
    /**
     * In case the Problem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProblemUpdateInput, ProblemUncheckedUpdateInput>
  }

  /**
   * Problem delete
   */
  export type ProblemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Problem
     */
    select?: ProblemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Problem
     */
    omit?: ProblemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInclude<ExtArgs> | null
    /**
     * Filter which Problem to delete.
     */
    where: ProblemWhereUniqueInput
  }

  /**
   * Problem deleteMany
   */
  export type ProblemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Problems to delete
     */
    where?: ProblemWhereInput
    /**
     * Limit how many Problems to delete.
     */
    limit?: number
  }

  /**
   * Problem.solves
   */
  export type Problem$solvesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Solve
     */
    select?: SolveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Solve
     */
    omit?: SolveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolveInclude<ExtArgs> | null
    where?: SolveWhereInput
    orderBy?: SolveOrderByWithRelationInput | SolveOrderByWithRelationInput[]
    cursor?: SolveWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SolveScalarFieldEnum | SolveScalarFieldEnum[]
  }

  /**
   * Problem without action
   */
  export type ProblemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Problem
     */
    select?: ProblemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Problem
     */
    omit?: ProblemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInclude<ExtArgs> | null
  }


  /**
   * Model Track
   */

  export type AggregateTrack = {
    _count: TrackCountAggregateOutputType | null
    _avg: TrackAvgAggregateOutputType | null
    _sum: TrackSumAggregateOutputType | null
    _min: TrackMinAggregateOutputType | null
    _max: TrackMaxAggregateOutputType | null
  }

  export type TrackAvgAggregateOutputType = {
    id: number | null
  }

  export type TrackSumAggregateOutputType = {
    id: bigint | null
  }

  export type TrackMinAggregateOutputType = {
    id: bigint | null
    name: string | null
  }

  export type TrackMaxAggregateOutputType = {
    id: bigint | null
    name: string | null
  }

  export type TrackCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type TrackAvgAggregateInputType = {
    id?: true
  }

  export type TrackSumAggregateInputType = {
    id?: true
  }

  export type TrackMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type TrackMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type TrackCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type TrackAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Track to aggregate.
     */
    where?: TrackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tracks to fetch.
     */
    orderBy?: TrackOrderByWithRelationInput | TrackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TrackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tracks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tracks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tracks
    **/
    _count?: true | TrackCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TrackAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TrackSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TrackMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TrackMaxAggregateInputType
  }

  export type GetTrackAggregateType<T extends TrackAggregateArgs> = {
        [P in keyof T & keyof AggregateTrack]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTrack[P]>
      : GetScalarType<T[P], AggregateTrack[P]>
  }




  export type TrackGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TrackWhereInput
    orderBy?: TrackOrderByWithAggregationInput | TrackOrderByWithAggregationInput[]
    by: TrackScalarFieldEnum[] | TrackScalarFieldEnum
    having?: TrackScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TrackCountAggregateInputType | true
    _avg?: TrackAvgAggregateInputType
    _sum?: TrackSumAggregateInputType
    _min?: TrackMinAggregateInputType
    _max?: TrackMaxAggregateInputType
  }

  export type TrackGroupByOutputType = {
    id: bigint
    name: string
    _count: TrackCountAggregateOutputType | null
    _avg: TrackAvgAggregateOutputType | null
    _sum: TrackSumAggregateOutputType | null
    _min: TrackMinAggregateOutputType | null
    _max: TrackMaxAggregateOutputType | null
  }

  type GetTrackGroupByPayload<T extends TrackGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TrackGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TrackGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TrackGroupByOutputType[P]>
            : GetScalarType<T[P], TrackGroupByOutputType[P]>
        }
      >
    >


  export type TrackSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    levels?: boolean | Track$levelsArgs<ExtArgs>
    userTrack?: boolean | Track$userTrackArgs<ExtArgs>
    _count?: boolean | TrackCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["track"]>

  export type TrackSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["track"]>

  export type TrackSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["track"]>

  export type TrackSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type TrackOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["track"]>
  export type TrackInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    levels?: boolean | Track$levelsArgs<ExtArgs>
    userTrack?: boolean | Track$userTrackArgs<ExtArgs>
    _count?: boolean | TrackCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TrackIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TrackIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TrackPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Track"
    objects: {
      levels: Prisma.$TrackLevelPayload<ExtArgs>[]
      userTrack: Prisma.$UserTrackPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      name: string
    }, ExtArgs["result"]["track"]>
    composites: {}
  }

  type TrackGetPayload<S extends boolean | null | undefined | TrackDefaultArgs> = $Result.GetResult<Prisma.$TrackPayload, S>

  type TrackCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TrackFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TrackCountAggregateInputType | true
    }

  export interface TrackDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Track'], meta: { name: 'Track' } }
    /**
     * Find zero or one Track that matches the filter.
     * @param {TrackFindUniqueArgs} args - Arguments to find a Track
     * @example
     * // Get one Track
     * const track = await prisma.track.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TrackFindUniqueArgs>(args: SelectSubset<T, TrackFindUniqueArgs<ExtArgs>>): Prisma__TrackClient<$Result.GetResult<Prisma.$TrackPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Track that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TrackFindUniqueOrThrowArgs} args - Arguments to find a Track
     * @example
     * // Get one Track
     * const track = await prisma.track.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TrackFindUniqueOrThrowArgs>(args: SelectSubset<T, TrackFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TrackClient<$Result.GetResult<Prisma.$TrackPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Track that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackFindFirstArgs} args - Arguments to find a Track
     * @example
     * // Get one Track
     * const track = await prisma.track.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TrackFindFirstArgs>(args?: SelectSubset<T, TrackFindFirstArgs<ExtArgs>>): Prisma__TrackClient<$Result.GetResult<Prisma.$TrackPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Track that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackFindFirstOrThrowArgs} args - Arguments to find a Track
     * @example
     * // Get one Track
     * const track = await prisma.track.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TrackFindFirstOrThrowArgs>(args?: SelectSubset<T, TrackFindFirstOrThrowArgs<ExtArgs>>): Prisma__TrackClient<$Result.GetResult<Prisma.$TrackPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tracks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tracks
     * const tracks = await prisma.track.findMany()
     * 
     * // Get first 10 Tracks
     * const tracks = await prisma.track.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const trackWithIdOnly = await prisma.track.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TrackFindManyArgs>(args?: SelectSubset<T, TrackFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrackPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Track.
     * @param {TrackCreateArgs} args - Arguments to create a Track.
     * @example
     * // Create one Track
     * const Track = await prisma.track.create({
     *   data: {
     *     // ... data to create a Track
     *   }
     * })
     * 
     */
    create<T extends TrackCreateArgs>(args: SelectSubset<T, TrackCreateArgs<ExtArgs>>): Prisma__TrackClient<$Result.GetResult<Prisma.$TrackPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tracks.
     * @param {TrackCreateManyArgs} args - Arguments to create many Tracks.
     * @example
     * // Create many Tracks
     * const track = await prisma.track.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TrackCreateManyArgs>(args?: SelectSubset<T, TrackCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tracks and returns the data saved in the database.
     * @param {TrackCreateManyAndReturnArgs} args - Arguments to create many Tracks.
     * @example
     * // Create many Tracks
     * const track = await prisma.track.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tracks and only return the `id`
     * const trackWithIdOnly = await prisma.track.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TrackCreateManyAndReturnArgs>(args?: SelectSubset<T, TrackCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrackPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Track.
     * @param {TrackDeleteArgs} args - Arguments to delete one Track.
     * @example
     * // Delete one Track
     * const Track = await prisma.track.delete({
     *   where: {
     *     // ... filter to delete one Track
     *   }
     * })
     * 
     */
    delete<T extends TrackDeleteArgs>(args: SelectSubset<T, TrackDeleteArgs<ExtArgs>>): Prisma__TrackClient<$Result.GetResult<Prisma.$TrackPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Track.
     * @param {TrackUpdateArgs} args - Arguments to update one Track.
     * @example
     * // Update one Track
     * const track = await prisma.track.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TrackUpdateArgs>(args: SelectSubset<T, TrackUpdateArgs<ExtArgs>>): Prisma__TrackClient<$Result.GetResult<Prisma.$TrackPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tracks.
     * @param {TrackDeleteManyArgs} args - Arguments to filter Tracks to delete.
     * @example
     * // Delete a few Tracks
     * const { count } = await prisma.track.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TrackDeleteManyArgs>(args?: SelectSubset<T, TrackDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tracks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tracks
     * const track = await prisma.track.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TrackUpdateManyArgs>(args: SelectSubset<T, TrackUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tracks and returns the data updated in the database.
     * @param {TrackUpdateManyAndReturnArgs} args - Arguments to update many Tracks.
     * @example
     * // Update many Tracks
     * const track = await prisma.track.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tracks and only return the `id`
     * const trackWithIdOnly = await prisma.track.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TrackUpdateManyAndReturnArgs>(args: SelectSubset<T, TrackUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrackPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Track.
     * @param {TrackUpsertArgs} args - Arguments to update or create a Track.
     * @example
     * // Update or create a Track
     * const track = await prisma.track.upsert({
     *   create: {
     *     // ... data to create a Track
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Track we want to update
     *   }
     * })
     */
    upsert<T extends TrackUpsertArgs>(args: SelectSubset<T, TrackUpsertArgs<ExtArgs>>): Prisma__TrackClient<$Result.GetResult<Prisma.$TrackPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tracks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackCountArgs} args - Arguments to filter Tracks to count.
     * @example
     * // Count the number of Tracks
     * const count = await prisma.track.count({
     *   where: {
     *     // ... the filter for the Tracks we want to count
     *   }
     * })
    **/
    count<T extends TrackCountArgs>(
      args?: Subset<T, TrackCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TrackCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Track.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TrackAggregateArgs>(args: Subset<T, TrackAggregateArgs>): Prisma.PrismaPromise<GetTrackAggregateType<T>>

    /**
     * Group by Track.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TrackGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TrackGroupByArgs['orderBy'] }
        : { orderBy?: TrackGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TrackGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTrackGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Track model
   */
  readonly fields: TrackFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Track.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TrackClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    levels<T extends Track$levelsArgs<ExtArgs> = {}>(args?: Subset<T, Track$levelsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrackLevelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    userTrack<T extends Track$userTrackArgs<ExtArgs> = {}>(args?: Subset<T, Track$userTrackArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserTrackPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Track model
   */
  interface TrackFieldRefs {
    readonly id: FieldRef<"Track", 'BigInt'>
    readonly name: FieldRef<"Track", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Track findUnique
   */
  export type TrackFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Track
     */
    select?: TrackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Track
     */
    omit?: TrackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackInclude<ExtArgs> | null
    /**
     * Filter, which Track to fetch.
     */
    where: TrackWhereUniqueInput
  }

  /**
   * Track findUniqueOrThrow
   */
  export type TrackFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Track
     */
    select?: TrackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Track
     */
    omit?: TrackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackInclude<ExtArgs> | null
    /**
     * Filter, which Track to fetch.
     */
    where: TrackWhereUniqueInput
  }

  /**
   * Track findFirst
   */
  export type TrackFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Track
     */
    select?: TrackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Track
     */
    omit?: TrackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackInclude<ExtArgs> | null
    /**
     * Filter, which Track to fetch.
     */
    where?: TrackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tracks to fetch.
     */
    orderBy?: TrackOrderByWithRelationInput | TrackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tracks.
     */
    cursor?: TrackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tracks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tracks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tracks.
     */
    distinct?: TrackScalarFieldEnum | TrackScalarFieldEnum[]
  }

  /**
   * Track findFirstOrThrow
   */
  export type TrackFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Track
     */
    select?: TrackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Track
     */
    omit?: TrackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackInclude<ExtArgs> | null
    /**
     * Filter, which Track to fetch.
     */
    where?: TrackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tracks to fetch.
     */
    orderBy?: TrackOrderByWithRelationInput | TrackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tracks.
     */
    cursor?: TrackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tracks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tracks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tracks.
     */
    distinct?: TrackScalarFieldEnum | TrackScalarFieldEnum[]
  }

  /**
   * Track findMany
   */
  export type TrackFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Track
     */
    select?: TrackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Track
     */
    omit?: TrackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackInclude<ExtArgs> | null
    /**
     * Filter, which Tracks to fetch.
     */
    where?: TrackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tracks to fetch.
     */
    orderBy?: TrackOrderByWithRelationInput | TrackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tracks.
     */
    cursor?: TrackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tracks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tracks.
     */
    skip?: number
    distinct?: TrackScalarFieldEnum | TrackScalarFieldEnum[]
  }

  /**
   * Track create
   */
  export type TrackCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Track
     */
    select?: TrackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Track
     */
    omit?: TrackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackInclude<ExtArgs> | null
    /**
     * The data needed to create a Track.
     */
    data: XOR<TrackCreateInput, TrackUncheckedCreateInput>
  }

  /**
   * Track createMany
   */
  export type TrackCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tracks.
     */
    data: TrackCreateManyInput | TrackCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Track createManyAndReturn
   */
  export type TrackCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Track
     */
    select?: TrackSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Track
     */
    omit?: TrackOmit<ExtArgs> | null
    /**
     * The data used to create many Tracks.
     */
    data: TrackCreateManyInput | TrackCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Track update
   */
  export type TrackUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Track
     */
    select?: TrackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Track
     */
    omit?: TrackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackInclude<ExtArgs> | null
    /**
     * The data needed to update a Track.
     */
    data: XOR<TrackUpdateInput, TrackUncheckedUpdateInput>
    /**
     * Choose, which Track to update.
     */
    where: TrackWhereUniqueInput
  }

  /**
   * Track updateMany
   */
  export type TrackUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tracks.
     */
    data: XOR<TrackUpdateManyMutationInput, TrackUncheckedUpdateManyInput>
    /**
     * Filter which Tracks to update
     */
    where?: TrackWhereInput
    /**
     * Limit how many Tracks to update.
     */
    limit?: number
  }

  /**
   * Track updateManyAndReturn
   */
  export type TrackUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Track
     */
    select?: TrackSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Track
     */
    omit?: TrackOmit<ExtArgs> | null
    /**
     * The data used to update Tracks.
     */
    data: XOR<TrackUpdateManyMutationInput, TrackUncheckedUpdateManyInput>
    /**
     * Filter which Tracks to update
     */
    where?: TrackWhereInput
    /**
     * Limit how many Tracks to update.
     */
    limit?: number
  }

  /**
   * Track upsert
   */
  export type TrackUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Track
     */
    select?: TrackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Track
     */
    omit?: TrackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackInclude<ExtArgs> | null
    /**
     * The filter to search for the Track to update in case it exists.
     */
    where: TrackWhereUniqueInput
    /**
     * In case the Track found by the `where` argument doesn't exist, create a new Track with this data.
     */
    create: XOR<TrackCreateInput, TrackUncheckedCreateInput>
    /**
     * In case the Track was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TrackUpdateInput, TrackUncheckedUpdateInput>
  }

  /**
   * Track delete
   */
  export type TrackDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Track
     */
    select?: TrackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Track
     */
    omit?: TrackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackInclude<ExtArgs> | null
    /**
     * Filter which Track to delete.
     */
    where: TrackWhereUniqueInput
  }

  /**
   * Track deleteMany
   */
  export type TrackDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tracks to delete
     */
    where?: TrackWhereInput
    /**
     * Limit how many Tracks to delete.
     */
    limit?: number
  }

  /**
   * Track.levels
   */
  export type Track$levelsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackLevel
     */
    select?: TrackLevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrackLevel
     */
    omit?: TrackLevelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackLevelInclude<ExtArgs> | null
    where?: TrackLevelWhereInput
    orderBy?: TrackLevelOrderByWithRelationInput | TrackLevelOrderByWithRelationInput[]
    cursor?: TrackLevelWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TrackLevelScalarFieldEnum | TrackLevelScalarFieldEnum[]
  }

  /**
   * Track.userTrack
   */
  export type Track$userTrackArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTrack
     */
    select?: UserTrackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTrack
     */
    omit?: UserTrackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTrackInclude<ExtArgs> | null
    where?: UserTrackWhereInput
    orderBy?: UserTrackOrderByWithRelationInput | UserTrackOrderByWithRelationInput[]
    cursor?: UserTrackWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserTrackScalarFieldEnum | UserTrackScalarFieldEnum[]
  }

  /**
   * Track without action
   */
  export type TrackDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Track
     */
    select?: TrackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Track
     */
    omit?: TrackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackInclude<ExtArgs> | null
  }


  /**
   * Model TrackLevel
   */

  export type AggregateTrackLevel = {
    _count: TrackLevelCountAggregateOutputType | null
    _avg: TrackLevelAvgAggregateOutputType | null
    _sum: TrackLevelSumAggregateOutputType | null
    _min: TrackLevelMinAggregateOutputType | null
    _max: TrackLevelMaxAggregateOutputType | null
  }

  export type TrackLevelAvgAggregateOutputType = {
    id: number | null
    trackId: number | null
    order: number | null
  }

  export type TrackLevelSumAggregateOutputType = {
    id: bigint | null
    trackId: bigint | null
    order: number | null
  }

  export type TrackLevelMinAggregateOutputType = {
    id: bigint | null
    trackId: bigint | null
    code: string | null
    order: number | null
  }

  export type TrackLevelMaxAggregateOutputType = {
    id: bigint | null
    trackId: bigint | null
    code: string | null
    order: number | null
  }

  export type TrackLevelCountAggregateOutputType = {
    id: number
    trackId: number
    code: number
    order: number
    _all: number
  }


  export type TrackLevelAvgAggregateInputType = {
    id?: true
    trackId?: true
    order?: true
  }

  export type TrackLevelSumAggregateInputType = {
    id?: true
    trackId?: true
    order?: true
  }

  export type TrackLevelMinAggregateInputType = {
    id?: true
    trackId?: true
    code?: true
    order?: true
  }

  export type TrackLevelMaxAggregateInputType = {
    id?: true
    trackId?: true
    code?: true
    order?: true
  }

  export type TrackLevelCountAggregateInputType = {
    id?: true
    trackId?: true
    code?: true
    order?: true
    _all?: true
  }

  export type TrackLevelAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TrackLevel to aggregate.
     */
    where?: TrackLevelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrackLevels to fetch.
     */
    orderBy?: TrackLevelOrderByWithRelationInput | TrackLevelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TrackLevelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrackLevels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrackLevels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TrackLevels
    **/
    _count?: true | TrackLevelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TrackLevelAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TrackLevelSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TrackLevelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TrackLevelMaxAggregateInputType
  }

  export type GetTrackLevelAggregateType<T extends TrackLevelAggregateArgs> = {
        [P in keyof T & keyof AggregateTrackLevel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTrackLevel[P]>
      : GetScalarType<T[P], AggregateTrackLevel[P]>
  }




  export type TrackLevelGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TrackLevelWhereInput
    orderBy?: TrackLevelOrderByWithAggregationInput | TrackLevelOrderByWithAggregationInput[]
    by: TrackLevelScalarFieldEnum[] | TrackLevelScalarFieldEnum
    having?: TrackLevelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TrackLevelCountAggregateInputType | true
    _avg?: TrackLevelAvgAggregateInputType
    _sum?: TrackLevelSumAggregateInputType
    _min?: TrackLevelMinAggregateInputType
    _max?: TrackLevelMaxAggregateInputType
  }

  export type TrackLevelGroupByOutputType = {
    id: bigint
    trackId: bigint
    code: string
    order: number
    _count: TrackLevelCountAggregateOutputType | null
    _avg: TrackLevelAvgAggregateOutputType | null
    _sum: TrackLevelSumAggregateOutputType | null
    _min: TrackLevelMinAggregateOutputType | null
    _max: TrackLevelMaxAggregateOutputType | null
  }

  type GetTrackLevelGroupByPayload<T extends TrackLevelGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TrackLevelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TrackLevelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TrackLevelGroupByOutputType[P]>
            : GetScalarType<T[P], TrackLevelGroupByOutputType[P]>
        }
      >
    >


  export type TrackLevelSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    trackId?: boolean
    code?: boolean
    order?: boolean
    track?: boolean | TrackDefaultArgs<ExtArgs>
    levelModules?: boolean | TrackLevel$levelModulesArgs<ExtArgs>
    _count?: boolean | TrackLevelCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trackLevel"]>

  export type TrackLevelSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    trackId?: boolean
    code?: boolean
    order?: boolean
    track?: boolean | TrackDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trackLevel"]>

  export type TrackLevelSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    trackId?: boolean
    code?: boolean
    order?: boolean
    track?: boolean | TrackDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trackLevel"]>

  export type TrackLevelSelectScalar = {
    id?: boolean
    trackId?: boolean
    code?: boolean
    order?: boolean
  }

  export type TrackLevelOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "trackId" | "code" | "order", ExtArgs["result"]["trackLevel"]>
  export type TrackLevelInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    track?: boolean | TrackDefaultArgs<ExtArgs>
    levelModules?: boolean | TrackLevel$levelModulesArgs<ExtArgs>
    _count?: boolean | TrackLevelCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TrackLevelIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    track?: boolean | TrackDefaultArgs<ExtArgs>
  }
  export type TrackLevelIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    track?: boolean | TrackDefaultArgs<ExtArgs>
  }

  export type $TrackLevelPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TrackLevel"
    objects: {
      track: Prisma.$TrackPayload<ExtArgs>
      levelModules: Prisma.$LevelModulePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      trackId: bigint
      code: string
      order: number
    }, ExtArgs["result"]["trackLevel"]>
    composites: {}
  }

  type TrackLevelGetPayload<S extends boolean | null | undefined | TrackLevelDefaultArgs> = $Result.GetResult<Prisma.$TrackLevelPayload, S>

  type TrackLevelCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TrackLevelFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TrackLevelCountAggregateInputType | true
    }

  export interface TrackLevelDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TrackLevel'], meta: { name: 'TrackLevel' } }
    /**
     * Find zero or one TrackLevel that matches the filter.
     * @param {TrackLevelFindUniqueArgs} args - Arguments to find a TrackLevel
     * @example
     * // Get one TrackLevel
     * const trackLevel = await prisma.trackLevel.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TrackLevelFindUniqueArgs>(args: SelectSubset<T, TrackLevelFindUniqueArgs<ExtArgs>>): Prisma__TrackLevelClient<$Result.GetResult<Prisma.$TrackLevelPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TrackLevel that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TrackLevelFindUniqueOrThrowArgs} args - Arguments to find a TrackLevel
     * @example
     * // Get one TrackLevel
     * const trackLevel = await prisma.trackLevel.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TrackLevelFindUniqueOrThrowArgs>(args: SelectSubset<T, TrackLevelFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TrackLevelClient<$Result.GetResult<Prisma.$TrackLevelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TrackLevel that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackLevelFindFirstArgs} args - Arguments to find a TrackLevel
     * @example
     * // Get one TrackLevel
     * const trackLevel = await prisma.trackLevel.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TrackLevelFindFirstArgs>(args?: SelectSubset<T, TrackLevelFindFirstArgs<ExtArgs>>): Prisma__TrackLevelClient<$Result.GetResult<Prisma.$TrackLevelPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TrackLevel that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackLevelFindFirstOrThrowArgs} args - Arguments to find a TrackLevel
     * @example
     * // Get one TrackLevel
     * const trackLevel = await prisma.trackLevel.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TrackLevelFindFirstOrThrowArgs>(args?: SelectSubset<T, TrackLevelFindFirstOrThrowArgs<ExtArgs>>): Prisma__TrackLevelClient<$Result.GetResult<Prisma.$TrackLevelPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TrackLevels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackLevelFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TrackLevels
     * const trackLevels = await prisma.trackLevel.findMany()
     * 
     * // Get first 10 TrackLevels
     * const trackLevels = await prisma.trackLevel.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const trackLevelWithIdOnly = await prisma.trackLevel.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TrackLevelFindManyArgs>(args?: SelectSubset<T, TrackLevelFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrackLevelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TrackLevel.
     * @param {TrackLevelCreateArgs} args - Arguments to create a TrackLevel.
     * @example
     * // Create one TrackLevel
     * const TrackLevel = await prisma.trackLevel.create({
     *   data: {
     *     // ... data to create a TrackLevel
     *   }
     * })
     * 
     */
    create<T extends TrackLevelCreateArgs>(args: SelectSubset<T, TrackLevelCreateArgs<ExtArgs>>): Prisma__TrackLevelClient<$Result.GetResult<Prisma.$TrackLevelPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TrackLevels.
     * @param {TrackLevelCreateManyArgs} args - Arguments to create many TrackLevels.
     * @example
     * // Create many TrackLevels
     * const trackLevel = await prisma.trackLevel.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TrackLevelCreateManyArgs>(args?: SelectSubset<T, TrackLevelCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TrackLevels and returns the data saved in the database.
     * @param {TrackLevelCreateManyAndReturnArgs} args - Arguments to create many TrackLevels.
     * @example
     * // Create many TrackLevels
     * const trackLevel = await prisma.trackLevel.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TrackLevels and only return the `id`
     * const trackLevelWithIdOnly = await prisma.trackLevel.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TrackLevelCreateManyAndReturnArgs>(args?: SelectSubset<T, TrackLevelCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrackLevelPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TrackLevel.
     * @param {TrackLevelDeleteArgs} args - Arguments to delete one TrackLevel.
     * @example
     * // Delete one TrackLevel
     * const TrackLevel = await prisma.trackLevel.delete({
     *   where: {
     *     // ... filter to delete one TrackLevel
     *   }
     * })
     * 
     */
    delete<T extends TrackLevelDeleteArgs>(args: SelectSubset<T, TrackLevelDeleteArgs<ExtArgs>>): Prisma__TrackLevelClient<$Result.GetResult<Prisma.$TrackLevelPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TrackLevel.
     * @param {TrackLevelUpdateArgs} args - Arguments to update one TrackLevel.
     * @example
     * // Update one TrackLevel
     * const trackLevel = await prisma.trackLevel.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TrackLevelUpdateArgs>(args: SelectSubset<T, TrackLevelUpdateArgs<ExtArgs>>): Prisma__TrackLevelClient<$Result.GetResult<Prisma.$TrackLevelPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TrackLevels.
     * @param {TrackLevelDeleteManyArgs} args - Arguments to filter TrackLevels to delete.
     * @example
     * // Delete a few TrackLevels
     * const { count } = await prisma.trackLevel.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TrackLevelDeleteManyArgs>(args?: SelectSubset<T, TrackLevelDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TrackLevels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackLevelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TrackLevels
     * const trackLevel = await prisma.trackLevel.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TrackLevelUpdateManyArgs>(args: SelectSubset<T, TrackLevelUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TrackLevels and returns the data updated in the database.
     * @param {TrackLevelUpdateManyAndReturnArgs} args - Arguments to update many TrackLevels.
     * @example
     * // Update many TrackLevels
     * const trackLevel = await prisma.trackLevel.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TrackLevels and only return the `id`
     * const trackLevelWithIdOnly = await prisma.trackLevel.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TrackLevelUpdateManyAndReturnArgs>(args: SelectSubset<T, TrackLevelUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrackLevelPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TrackLevel.
     * @param {TrackLevelUpsertArgs} args - Arguments to update or create a TrackLevel.
     * @example
     * // Update or create a TrackLevel
     * const trackLevel = await prisma.trackLevel.upsert({
     *   create: {
     *     // ... data to create a TrackLevel
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TrackLevel we want to update
     *   }
     * })
     */
    upsert<T extends TrackLevelUpsertArgs>(args: SelectSubset<T, TrackLevelUpsertArgs<ExtArgs>>): Prisma__TrackLevelClient<$Result.GetResult<Prisma.$TrackLevelPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TrackLevels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackLevelCountArgs} args - Arguments to filter TrackLevels to count.
     * @example
     * // Count the number of TrackLevels
     * const count = await prisma.trackLevel.count({
     *   where: {
     *     // ... the filter for the TrackLevels we want to count
     *   }
     * })
    **/
    count<T extends TrackLevelCountArgs>(
      args?: Subset<T, TrackLevelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TrackLevelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TrackLevel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackLevelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TrackLevelAggregateArgs>(args: Subset<T, TrackLevelAggregateArgs>): Prisma.PrismaPromise<GetTrackLevelAggregateType<T>>

    /**
     * Group by TrackLevel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackLevelGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TrackLevelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TrackLevelGroupByArgs['orderBy'] }
        : { orderBy?: TrackLevelGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TrackLevelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTrackLevelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TrackLevel model
   */
  readonly fields: TrackLevelFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TrackLevel.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TrackLevelClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    track<T extends TrackDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TrackDefaultArgs<ExtArgs>>): Prisma__TrackClient<$Result.GetResult<Prisma.$TrackPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    levelModules<T extends TrackLevel$levelModulesArgs<ExtArgs> = {}>(args?: Subset<T, TrackLevel$levelModulesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LevelModulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TrackLevel model
   */
  interface TrackLevelFieldRefs {
    readonly id: FieldRef<"TrackLevel", 'BigInt'>
    readonly trackId: FieldRef<"TrackLevel", 'BigInt'>
    readonly code: FieldRef<"TrackLevel", 'String'>
    readonly order: FieldRef<"TrackLevel", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * TrackLevel findUnique
   */
  export type TrackLevelFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackLevel
     */
    select?: TrackLevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrackLevel
     */
    omit?: TrackLevelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackLevelInclude<ExtArgs> | null
    /**
     * Filter, which TrackLevel to fetch.
     */
    where: TrackLevelWhereUniqueInput
  }

  /**
   * TrackLevel findUniqueOrThrow
   */
  export type TrackLevelFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackLevel
     */
    select?: TrackLevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrackLevel
     */
    omit?: TrackLevelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackLevelInclude<ExtArgs> | null
    /**
     * Filter, which TrackLevel to fetch.
     */
    where: TrackLevelWhereUniqueInput
  }

  /**
   * TrackLevel findFirst
   */
  export type TrackLevelFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackLevel
     */
    select?: TrackLevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrackLevel
     */
    omit?: TrackLevelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackLevelInclude<ExtArgs> | null
    /**
     * Filter, which TrackLevel to fetch.
     */
    where?: TrackLevelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrackLevels to fetch.
     */
    orderBy?: TrackLevelOrderByWithRelationInput | TrackLevelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TrackLevels.
     */
    cursor?: TrackLevelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrackLevels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrackLevels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TrackLevels.
     */
    distinct?: TrackLevelScalarFieldEnum | TrackLevelScalarFieldEnum[]
  }

  /**
   * TrackLevel findFirstOrThrow
   */
  export type TrackLevelFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackLevel
     */
    select?: TrackLevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrackLevel
     */
    omit?: TrackLevelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackLevelInclude<ExtArgs> | null
    /**
     * Filter, which TrackLevel to fetch.
     */
    where?: TrackLevelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrackLevels to fetch.
     */
    orderBy?: TrackLevelOrderByWithRelationInput | TrackLevelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TrackLevels.
     */
    cursor?: TrackLevelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrackLevels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrackLevels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TrackLevels.
     */
    distinct?: TrackLevelScalarFieldEnum | TrackLevelScalarFieldEnum[]
  }

  /**
   * TrackLevel findMany
   */
  export type TrackLevelFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackLevel
     */
    select?: TrackLevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrackLevel
     */
    omit?: TrackLevelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackLevelInclude<ExtArgs> | null
    /**
     * Filter, which TrackLevels to fetch.
     */
    where?: TrackLevelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrackLevels to fetch.
     */
    orderBy?: TrackLevelOrderByWithRelationInput | TrackLevelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TrackLevels.
     */
    cursor?: TrackLevelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrackLevels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrackLevels.
     */
    skip?: number
    distinct?: TrackLevelScalarFieldEnum | TrackLevelScalarFieldEnum[]
  }

  /**
   * TrackLevel create
   */
  export type TrackLevelCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackLevel
     */
    select?: TrackLevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrackLevel
     */
    omit?: TrackLevelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackLevelInclude<ExtArgs> | null
    /**
     * The data needed to create a TrackLevel.
     */
    data: XOR<TrackLevelCreateInput, TrackLevelUncheckedCreateInput>
  }

  /**
   * TrackLevel createMany
   */
  export type TrackLevelCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TrackLevels.
     */
    data: TrackLevelCreateManyInput | TrackLevelCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TrackLevel createManyAndReturn
   */
  export type TrackLevelCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackLevel
     */
    select?: TrackLevelSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TrackLevel
     */
    omit?: TrackLevelOmit<ExtArgs> | null
    /**
     * The data used to create many TrackLevels.
     */
    data: TrackLevelCreateManyInput | TrackLevelCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackLevelIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TrackLevel update
   */
  export type TrackLevelUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackLevel
     */
    select?: TrackLevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrackLevel
     */
    omit?: TrackLevelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackLevelInclude<ExtArgs> | null
    /**
     * The data needed to update a TrackLevel.
     */
    data: XOR<TrackLevelUpdateInput, TrackLevelUncheckedUpdateInput>
    /**
     * Choose, which TrackLevel to update.
     */
    where: TrackLevelWhereUniqueInput
  }

  /**
   * TrackLevel updateMany
   */
  export type TrackLevelUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TrackLevels.
     */
    data: XOR<TrackLevelUpdateManyMutationInput, TrackLevelUncheckedUpdateManyInput>
    /**
     * Filter which TrackLevels to update
     */
    where?: TrackLevelWhereInput
    /**
     * Limit how many TrackLevels to update.
     */
    limit?: number
  }

  /**
   * TrackLevel updateManyAndReturn
   */
  export type TrackLevelUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackLevel
     */
    select?: TrackLevelSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TrackLevel
     */
    omit?: TrackLevelOmit<ExtArgs> | null
    /**
     * The data used to update TrackLevels.
     */
    data: XOR<TrackLevelUpdateManyMutationInput, TrackLevelUncheckedUpdateManyInput>
    /**
     * Filter which TrackLevels to update
     */
    where?: TrackLevelWhereInput
    /**
     * Limit how many TrackLevels to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackLevelIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TrackLevel upsert
   */
  export type TrackLevelUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackLevel
     */
    select?: TrackLevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrackLevel
     */
    omit?: TrackLevelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackLevelInclude<ExtArgs> | null
    /**
     * The filter to search for the TrackLevel to update in case it exists.
     */
    where: TrackLevelWhereUniqueInput
    /**
     * In case the TrackLevel found by the `where` argument doesn't exist, create a new TrackLevel with this data.
     */
    create: XOR<TrackLevelCreateInput, TrackLevelUncheckedCreateInput>
    /**
     * In case the TrackLevel was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TrackLevelUpdateInput, TrackLevelUncheckedUpdateInput>
  }

  /**
   * TrackLevel delete
   */
  export type TrackLevelDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackLevel
     */
    select?: TrackLevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrackLevel
     */
    omit?: TrackLevelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackLevelInclude<ExtArgs> | null
    /**
     * Filter which TrackLevel to delete.
     */
    where: TrackLevelWhereUniqueInput
  }

  /**
   * TrackLevel deleteMany
   */
  export type TrackLevelDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TrackLevels to delete
     */
    where?: TrackLevelWhereInput
    /**
     * Limit how many TrackLevels to delete.
     */
    limit?: number
  }

  /**
   * TrackLevel.levelModules
   */
  export type TrackLevel$levelModulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LevelModule
     */
    select?: LevelModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LevelModule
     */
    omit?: LevelModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LevelModuleInclude<ExtArgs> | null
    where?: LevelModuleWhereInput
    orderBy?: LevelModuleOrderByWithRelationInput | LevelModuleOrderByWithRelationInput[]
    cursor?: LevelModuleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LevelModuleScalarFieldEnum | LevelModuleScalarFieldEnum[]
  }

  /**
   * TrackLevel without action
   */
  export type TrackLevelDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackLevel
     */
    select?: TrackLevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrackLevel
     */
    omit?: TrackLevelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackLevelInclude<ExtArgs> | null
  }


  /**
   * Model LevelModule
   */

  export type AggregateLevelModule = {
    _count: LevelModuleCountAggregateOutputType | null
    _avg: LevelModuleAvgAggregateOutputType | null
    _sum: LevelModuleSumAggregateOutputType | null
    _min: LevelModuleMinAggregateOutputType | null
    _max: LevelModuleMaxAggregateOutputType | null
  }

  export type LevelModuleAvgAggregateOutputType = {
    id: number | null
    trackLevelId: number | null
    moduleId: number | null
    order: number | null
  }

  export type LevelModuleSumAggregateOutputType = {
    id: bigint | null
    trackLevelId: bigint | null
    moduleId: bigint | null
    order: number | null
  }

  export type LevelModuleMinAggregateOutputType = {
    id: bigint | null
    trackLevelId: bigint | null
    moduleId: bigint | null
    order: number | null
  }

  export type LevelModuleMaxAggregateOutputType = {
    id: bigint | null
    trackLevelId: bigint | null
    moduleId: bigint | null
    order: number | null
  }

  export type LevelModuleCountAggregateOutputType = {
    id: number
    trackLevelId: number
    moduleId: number
    order: number
    _all: number
  }


  export type LevelModuleAvgAggregateInputType = {
    id?: true
    trackLevelId?: true
    moduleId?: true
    order?: true
  }

  export type LevelModuleSumAggregateInputType = {
    id?: true
    trackLevelId?: true
    moduleId?: true
    order?: true
  }

  export type LevelModuleMinAggregateInputType = {
    id?: true
    trackLevelId?: true
    moduleId?: true
    order?: true
  }

  export type LevelModuleMaxAggregateInputType = {
    id?: true
    trackLevelId?: true
    moduleId?: true
    order?: true
  }

  export type LevelModuleCountAggregateInputType = {
    id?: true
    trackLevelId?: true
    moduleId?: true
    order?: true
    _all?: true
  }

  export type LevelModuleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LevelModule to aggregate.
     */
    where?: LevelModuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LevelModules to fetch.
     */
    orderBy?: LevelModuleOrderByWithRelationInput | LevelModuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LevelModuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LevelModules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LevelModules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LevelModules
    **/
    _count?: true | LevelModuleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LevelModuleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LevelModuleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LevelModuleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LevelModuleMaxAggregateInputType
  }

  export type GetLevelModuleAggregateType<T extends LevelModuleAggregateArgs> = {
        [P in keyof T & keyof AggregateLevelModule]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLevelModule[P]>
      : GetScalarType<T[P], AggregateLevelModule[P]>
  }




  export type LevelModuleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LevelModuleWhereInput
    orderBy?: LevelModuleOrderByWithAggregationInput | LevelModuleOrderByWithAggregationInput[]
    by: LevelModuleScalarFieldEnum[] | LevelModuleScalarFieldEnum
    having?: LevelModuleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LevelModuleCountAggregateInputType | true
    _avg?: LevelModuleAvgAggregateInputType
    _sum?: LevelModuleSumAggregateInputType
    _min?: LevelModuleMinAggregateInputType
    _max?: LevelModuleMaxAggregateInputType
  }

  export type LevelModuleGroupByOutputType = {
    id: bigint
    trackLevelId: bigint
    moduleId: bigint
    order: number
    _count: LevelModuleCountAggregateOutputType | null
    _avg: LevelModuleAvgAggregateOutputType | null
    _sum: LevelModuleSumAggregateOutputType | null
    _min: LevelModuleMinAggregateOutputType | null
    _max: LevelModuleMaxAggregateOutputType | null
  }

  type GetLevelModuleGroupByPayload<T extends LevelModuleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LevelModuleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LevelModuleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LevelModuleGroupByOutputType[P]>
            : GetScalarType<T[P], LevelModuleGroupByOutputType[P]>
        }
      >
    >


  export type LevelModuleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    trackLevelId?: boolean
    moduleId?: boolean
    order?: boolean
    trackLevel?: boolean | TrackLevelDefaultArgs<ExtArgs>
    module?: boolean | ModuleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["levelModule"]>

  export type LevelModuleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    trackLevelId?: boolean
    moduleId?: boolean
    order?: boolean
    trackLevel?: boolean | TrackLevelDefaultArgs<ExtArgs>
    module?: boolean | ModuleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["levelModule"]>

  export type LevelModuleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    trackLevelId?: boolean
    moduleId?: boolean
    order?: boolean
    trackLevel?: boolean | TrackLevelDefaultArgs<ExtArgs>
    module?: boolean | ModuleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["levelModule"]>

  export type LevelModuleSelectScalar = {
    id?: boolean
    trackLevelId?: boolean
    moduleId?: boolean
    order?: boolean
  }

  export type LevelModuleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "trackLevelId" | "moduleId" | "order", ExtArgs["result"]["levelModule"]>
  export type LevelModuleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trackLevel?: boolean | TrackLevelDefaultArgs<ExtArgs>
    module?: boolean | ModuleDefaultArgs<ExtArgs>
  }
  export type LevelModuleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trackLevel?: boolean | TrackLevelDefaultArgs<ExtArgs>
    module?: boolean | ModuleDefaultArgs<ExtArgs>
  }
  export type LevelModuleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trackLevel?: boolean | TrackLevelDefaultArgs<ExtArgs>
    module?: boolean | ModuleDefaultArgs<ExtArgs>
  }

  export type $LevelModulePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LevelModule"
    objects: {
      trackLevel: Prisma.$TrackLevelPayload<ExtArgs>
      module: Prisma.$ModulePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      trackLevelId: bigint
      moduleId: bigint
      order: number
    }, ExtArgs["result"]["levelModule"]>
    composites: {}
  }

  type LevelModuleGetPayload<S extends boolean | null | undefined | LevelModuleDefaultArgs> = $Result.GetResult<Prisma.$LevelModulePayload, S>

  type LevelModuleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LevelModuleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LevelModuleCountAggregateInputType | true
    }

  export interface LevelModuleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LevelModule'], meta: { name: 'LevelModule' } }
    /**
     * Find zero or one LevelModule that matches the filter.
     * @param {LevelModuleFindUniqueArgs} args - Arguments to find a LevelModule
     * @example
     * // Get one LevelModule
     * const levelModule = await prisma.levelModule.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LevelModuleFindUniqueArgs>(args: SelectSubset<T, LevelModuleFindUniqueArgs<ExtArgs>>): Prisma__LevelModuleClient<$Result.GetResult<Prisma.$LevelModulePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LevelModule that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LevelModuleFindUniqueOrThrowArgs} args - Arguments to find a LevelModule
     * @example
     * // Get one LevelModule
     * const levelModule = await prisma.levelModule.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LevelModuleFindUniqueOrThrowArgs>(args: SelectSubset<T, LevelModuleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LevelModuleClient<$Result.GetResult<Prisma.$LevelModulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LevelModule that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LevelModuleFindFirstArgs} args - Arguments to find a LevelModule
     * @example
     * // Get one LevelModule
     * const levelModule = await prisma.levelModule.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LevelModuleFindFirstArgs>(args?: SelectSubset<T, LevelModuleFindFirstArgs<ExtArgs>>): Prisma__LevelModuleClient<$Result.GetResult<Prisma.$LevelModulePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LevelModule that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LevelModuleFindFirstOrThrowArgs} args - Arguments to find a LevelModule
     * @example
     * // Get one LevelModule
     * const levelModule = await prisma.levelModule.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LevelModuleFindFirstOrThrowArgs>(args?: SelectSubset<T, LevelModuleFindFirstOrThrowArgs<ExtArgs>>): Prisma__LevelModuleClient<$Result.GetResult<Prisma.$LevelModulePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LevelModules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LevelModuleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LevelModules
     * const levelModules = await prisma.levelModule.findMany()
     * 
     * // Get first 10 LevelModules
     * const levelModules = await prisma.levelModule.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const levelModuleWithIdOnly = await prisma.levelModule.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LevelModuleFindManyArgs>(args?: SelectSubset<T, LevelModuleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LevelModulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LevelModule.
     * @param {LevelModuleCreateArgs} args - Arguments to create a LevelModule.
     * @example
     * // Create one LevelModule
     * const LevelModule = await prisma.levelModule.create({
     *   data: {
     *     // ... data to create a LevelModule
     *   }
     * })
     * 
     */
    create<T extends LevelModuleCreateArgs>(args: SelectSubset<T, LevelModuleCreateArgs<ExtArgs>>): Prisma__LevelModuleClient<$Result.GetResult<Prisma.$LevelModulePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LevelModules.
     * @param {LevelModuleCreateManyArgs} args - Arguments to create many LevelModules.
     * @example
     * // Create many LevelModules
     * const levelModule = await prisma.levelModule.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LevelModuleCreateManyArgs>(args?: SelectSubset<T, LevelModuleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LevelModules and returns the data saved in the database.
     * @param {LevelModuleCreateManyAndReturnArgs} args - Arguments to create many LevelModules.
     * @example
     * // Create many LevelModules
     * const levelModule = await prisma.levelModule.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LevelModules and only return the `id`
     * const levelModuleWithIdOnly = await prisma.levelModule.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LevelModuleCreateManyAndReturnArgs>(args?: SelectSubset<T, LevelModuleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LevelModulePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LevelModule.
     * @param {LevelModuleDeleteArgs} args - Arguments to delete one LevelModule.
     * @example
     * // Delete one LevelModule
     * const LevelModule = await prisma.levelModule.delete({
     *   where: {
     *     // ... filter to delete one LevelModule
     *   }
     * })
     * 
     */
    delete<T extends LevelModuleDeleteArgs>(args: SelectSubset<T, LevelModuleDeleteArgs<ExtArgs>>): Prisma__LevelModuleClient<$Result.GetResult<Prisma.$LevelModulePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LevelModule.
     * @param {LevelModuleUpdateArgs} args - Arguments to update one LevelModule.
     * @example
     * // Update one LevelModule
     * const levelModule = await prisma.levelModule.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LevelModuleUpdateArgs>(args: SelectSubset<T, LevelModuleUpdateArgs<ExtArgs>>): Prisma__LevelModuleClient<$Result.GetResult<Prisma.$LevelModulePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LevelModules.
     * @param {LevelModuleDeleteManyArgs} args - Arguments to filter LevelModules to delete.
     * @example
     * // Delete a few LevelModules
     * const { count } = await prisma.levelModule.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LevelModuleDeleteManyArgs>(args?: SelectSubset<T, LevelModuleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LevelModules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LevelModuleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LevelModules
     * const levelModule = await prisma.levelModule.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LevelModuleUpdateManyArgs>(args: SelectSubset<T, LevelModuleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LevelModules and returns the data updated in the database.
     * @param {LevelModuleUpdateManyAndReturnArgs} args - Arguments to update many LevelModules.
     * @example
     * // Update many LevelModules
     * const levelModule = await prisma.levelModule.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LevelModules and only return the `id`
     * const levelModuleWithIdOnly = await prisma.levelModule.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LevelModuleUpdateManyAndReturnArgs>(args: SelectSubset<T, LevelModuleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LevelModulePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LevelModule.
     * @param {LevelModuleUpsertArgs} args - Arguments to update or create a LevelModule.
     * @example
     * // Update or create a LevelModule
     * const levelModule = await prisma.levelModule.upsert({
     *   create: {
     *     // ... data to create a LevelModule
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LevelModule we want to update
     *   }
     * })
     */
    upsert<T extends LevelModuleUpsertArgs>(args: SelectSubset<T, LevelModuleUpsertArgs<ExtArgs>>): Prisma__LevelModuleClient<$Result.GetResult<Prisma.$LevelModulePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LevelModules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LevelModuleCountArgs} args - Arguments to filter LevelModules to count.
     * @example
     * // Count the number of LevelModules
     * const count = await prisma.levelModule.count({
     *   where: {
     *     // ... the filter for the LevelModules we want to count
     *   }
     * })
    **/
    count<T extends LevelModuleCountArgs>(
      args?: Subset<T, LevelModuleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LevelModuleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LevelModule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LevelModuleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LevelModuleAggregateArgs>(args: Subset<T, LevelModuleAggregateArgs>): Prisma.PrismaPromise<GetLevelModuleAggregateType<T>>

    /**
     * Group by LevelModule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LevelModuleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LevelModuleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LevelModuleGroupByArgs['orderBy'] }
        : { orderBy?: LevelModuleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LevelModuleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLevelModuleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LevelModule model
   */
  readonly fields: LevelModuleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LevelModule.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LevelModuleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    trackLevel<T extends TrackLevelDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TrackLevelDefaultArgs<ExtArgs>>): Prisma__TrackLevelClient<$Result.GetResult<Prisma.$TrackLevelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    module<T extends ModuleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ModuleDefaultArgs<ExtArgs>>): Prisma__ModuleClient<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the LevelModule model
   */
  interface LevelModuleFieldRefs {
    readonly id: FieldRef<"LevelModule", 'BigInt'>
    readonly trackLevelId: FieldRef<"LevelModule", 'BigInt'>
    readonly moduleId: FieldRef<"LevelModule", 'BigInt'>
    readonly order: FieldRef<"LevelModule", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * LevelModule findUnique
   */
  export type LevelModuleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LevelModule
     */
    select?: LevelModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LevelModule
     */
    omit?: LevelModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LevelModuleInclude<ExtArgs> | null
    /**
     * Filter, which LevelModule to fetch.
     */
    where: LevelModuleWhereUniqueInput
  }

  /**
   * LevelModule findUniqueOrThrow
   */
  export type LevelModuleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LevelModule
     */
    select?: LevelModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LevelModule
     */
    omit?: LevelModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LevelModuleInclude<ExtArgs> | null
    /**
     * Filter, which LevelModule to fetch.
     */
    where: LevelModuleWhereUniqueInput
  }

  /**
   * LevelModule findFirst
   */
  export type LevelModuleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LevelModule
     */
    select?: LevelModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LevelModule
     */
    omit?: LevelModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LevelModuleInclude<ExtArgs> | null
    /**
     * Filter, which LevelModule to fetch.
     */
    where?: LevelModuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LevelModules to fetch.
     */
    orderBy?: LevelModuleOrderByWithRelationInput | LevelModuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LevelModules.
     */
    cursor?: LevelModuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LevelModules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LevelModules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LevelModules.
     */
    distinct?: LevelModuleScalarFieldEnum | LevelModuleScalarFieldEnum[]
  }

  /**
   * LevelModule findFirstOrThrow
   */
  export type LevelModuleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LevelModule
     */
    select?: LevelModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LevelModule
     */
    omit?: LevelModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LevelModuleInclude<ExtArgs> | null
    /**
     * Filter, which LevelModule to fetch.
     */
    where?: LevelModuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LevelModules to fetch.
     */
    orderBy?: LevelModuleOrderByWithRelationInput | LevelModuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LevelModules.
     */
    cursor?: LevelModuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LevelModules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LevelModules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LevelModules.
     */
    distinct?: LevelModuleScalarFieldEnum | LevelModuleScalarFieldEnum[]
  }

  /**
   * LevelModule findMany
   */
  export type LevelModuleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LevelModule
     */
    select?: LevelModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LevelModule
     */
    omit?: LevelModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LevelModuleInclude<ExtArgs> | null
    /**
     * Filter, which LevelModules to fetch.
     */
    where?: LevelModuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LevelModules to fetch.
     */
    orderBy?: LevelModuleOrderByWithRelationInput | LevelModuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LevelModules.
     */
    cursor?: LevelModuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LevelModules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LevelModules.
     */
    skip?: number
    distinct?: LevelModuleScalarFieldEnum | LevelModuleScalarFieldEnum[]
  }

  /**
   * LevelModule create
   */
  export type LevelModuleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LevelModule
     */
    select?: LevelModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LevelModule
     */
    omit?: LevelModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LevelModuleInclude<ExtArgs> | null
    /**
     * The data needed to create a LevelModule.
     */
    data: XOR<LevelModuleCreateInput, LevelModuleUncheckedCreateInput>
  }

  /**
   * LevelModule createMany
   */
  export type LevelModuleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LevelModules.
     */
    data: LevelModuleCreateManyInput | LevelModuleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LevelModule createManyAndReturn
   */
  export type LevelModuleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LevelModule
     */
    select?: LevelModuleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LevelModule
     */
    omit?: LevelModuleOmit<ExtArgs> | null
    /**
     * The data used to create many LevelModules.
     */
    data: LevelModuleCreateManyInput | LevelModuleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LevelModuleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LevelModule update
   */
  export type LevelModuleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LevelModule
     */
    select?: LevelModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LevelModule
     */
    omit?: LevelModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LevelModuleInclude<ExtArgs> | null
    /**
     * The data needed to update a LevelModule.
     */
    data: XOR<LevelModuleUpdateInput, LevelModuleUncheckedUpdateInput>
    /**
     * Choose, which LevelModule to update.
     */
    where: LevelModuleWhereUniqueInput
  }

  /**
   * LevelModule updateMany
   */
  export type LevelModuleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LevelModules.
     */
    data: XOR<LevelModuleUpdateManyMutationInput, LevelModuleUncheckedUpdateManyInput>
    /**
     * Filter which LevelModules to update
     */
    where?: LevelModuleWhereInput
    /**
     * Limit how many LevelModules to update.
     */
    limit?: number
  }

  /**
   * LevelModule updateManyAndReturn
   */
  export type LevelModuleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LevelModule
     */
    select?: LevelModuleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LevelModule
     */
    omit?: LevelModuleOmit<ExtArgs> | null
    /**
     * The data used to update LevelModules.
     */
    data: XOR<LevelModuleUpdateManyMutationInput, LevelModuleUncheckedUpdateManyInput>
    /**
     * Filter which LevelModules to update
     */
    where?: LevelModuleWhereInput
    /**
     * Limit how many LevelModules to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LevelModuleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * LevelModule upsert
   */
  export type LevelModuleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LevelModule
     */
    select?: LevelModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LevelModule
     */
    omit?: LevelModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LevelModuleInclude<ExtArgs> | null
    /**
     * The filter to search for the LevelModule to update in case it exists.
     */
    where: LevelModuleWhereUniqueInput
    /**
     * In case the LevelModule found by the `where` argument doesn't exist, create a new LevelModule with this data.
     */
    create: XOR<LevelModuleCreateInput, LevelModuleUncheckedCreateInput>
    /**
     * In case the LevelModule was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LevelModuleUpdateInput, LevelModuleUncheckedUpdateInput>
  }

  /**
   * LevelModule delete
   */
  export type LevelModuleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LevelModule
     */
    select?: LevelModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LevelModule
     */
    omit?: LevelModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LevelModuleInclude<ExtArgs> | null
    /**
     * Filter which LevelModule to delete.
     */
    where: LevelModuleWhereUniqueInput
  }

  /**
   * LevelModule deleteMany
   */
  export type LevelModuleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LevelModules to delete
     */
    where?: LevelModuleWhereInput
    /**
     * Limit how many LevelModules to delete.
     */
    limit?: number
  }

  /**
   * LevelModule without action
   */
  export type LevelModuleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LevelModule
     */
    select?: LevelModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LevelModule
     */
    omit?: LevelModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LevelModuleInclude<ExtArgs> | null
  }


  /**
   * Model Module
   */

  export type AggregateModule = {
    _count: ModuleCountAggregateOutputType | null
    _avg: ModuleAvgAggregateOutputType | null
    _sum: ModuleSumAggregateOutputType | null
    _min: ModuleMinAggregateOutputType | null
    _max: ModuleMaxAggregateOutputType | null
  }

  export type ModuleAvgAggregateOutputType = {
    id: number | null
  }

  export type ModuleSumAggregateOutputType = {
    id: bigint | null
  }

  export type ModuleMinAggregateOutputType = {
    id: bigint | null
    name: string | null
  }

  export type ModuleMaxAggregateOutputType = {
    id: bigint | null
    name: string | null
  }

  export type ModuleCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type ModuleAvgAggregateInputType = {
    id?: true
  }

  export type ModuleSumAggregateInputType = {
    id?: true
  }

  export type ModuleMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type ModuleMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type ModuleCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type ModuleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Module to aggregate.
     */
    where?: ModuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Modules to fetch.
     */
    orderBy?: ModuleOrderByWithRelationInput | ModuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ModuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Modules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Modules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Modules
    **/
    _count?: true | ModuleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ModuleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ModuleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ModuleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ModuleMaxAggregateInputType
  }

  export type GetModuleAggregateType<T extends ModuleAggregateArgs> = {
        [P in keyof T & keyof AggregateModule]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateModule[P]>
      : GetScalarType<T[P], AggregateModule[P]>
  }




  export type ModuleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ModuleWhereInput
    orderBy?: ModuleOrderByWithAggregationInput | ModuleOrderByWithAggregationInput[]
    by: ModuleScalarFieldEnum[] | ModuleScalarFieldEnum
    having?: ModuleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ModuleCountAggregateInputType | true
    _avg?: ModuleAvgAggregateInputType
    _sum?: ModuleSumAggregateInputType
    _min?: ModuleMinAggregateInputType
    _max?: ModuleMaxAggregateInputType
  }

  export type ModuleGroupByOutputType = {
    id: bigint
    name: string
    _count: ModuleCountAggregateOutputType | null
    _avg: ModuleAvgAggregateOutputType | null
    _sum: ModuleSumAggregateOutputType | null
    _min: ModuleMinAggregateOutputType | null
    _max: ModuleMaxAggregateOutputType | null
  }

  type GetModuleGroupByPayload<T extends ModuleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ModuleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ModuleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ModuleGroupByOutputType[P]>
            : GetScalarType<T[P], ModuleGroupByOutputType[P]>
        }
      >
    >


  export type ModuleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    moduleProblems?: boolean | Module$moduleProblemsArgs<ExtArgs>
    levelModules?: boolean | Module$levelModulesArgs<ExtArgs>
    _count?: boolean | ModuleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["module"]>

  export type ModuleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["module"]>

  export type ModuleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["module"]>

  export type ModuleSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type ModuleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["module"]>
  export type ModuleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    moduleProblems?: boolean | Module$moduleProblemsArgs<ExtArgs>
    levelModules?: boolean | Module$levelModulesArgs<ExtArgs>
    _count?: boolean | ModuleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ModuleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ModuleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ModulePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Module"
    objects: {
      moduleProblems: Prisma.$ModuleProblemPayload<ExtArgs>[]
      levelModules: Prisma.$LevelModulePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      name: string
    }, ExtArgs["result"]["module"]>
    composites: {}
  }

  type ModuleGetPayload<S extends boolean | null | undefined | ModuleDefaultArgs> = $Result.GetResult<Prisma.$ModulePayload, S>

  type ModuleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ModuleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ModuleCountAggregateInputType | true
    }

  export interface ModuleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Module'], meta: { name: 'Module' } }
    /**
     * Find zero or one Module that matches the filter.
     * @param {ModuleFindUniqueArgs} args - Arguments to find a Module
     * @example
     * // Get one Module
     * const module = await prisma.module.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ModuleFindUniqueArgs>(args: SelectSubset<T, ModuleFindUniqueArgs<ExtArgs>>): Prisma__ModuleClient<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Module that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ModuleFindUniqueOrThrowArgs} args - Arguments to find a Module
     * @example
     * // Get one Module
     * const module = await prisma.module.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ModuleFindUniqueOrThrowArgs>(args: SelectSubset<T, ModuleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ModuleClient<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Module that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModuleFindFirstArgs} args - Arguments to find a Module
     * @example
     * // Get one Module
     * const module = await prisma.module.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ModuleFindFirstArgs>(args?: SelectSubset<T, ModuleFindFirstArgs<ExtArgs>>): Prisma__ModuleClient<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Module that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModuleFindFirstOrThrowArgs} args - Arguments to find a Module
     * @example
     * // Get one Module
     * const module = await prisma.module.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ModuleFindFirstOrThrowArgs>(args?: SelectSubset<T, ModuleFindFirstOrThrowArgs<ExtArgs>>): Prisma__ModuleClient<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Modules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModuleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Modules
     * const modules = await prisma.module.findMany()
     * 
     * // Get first 10 Modules
     * const modules = await prisma.module.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const moduleWithIdOnly = await prisma.module.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ModuleFindManyArgs>(args?: SelectSubset<T, ModuleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Module.
     * @param {ModuleCreateArgs} args - Arguments to create a Module.
     * @example
     * // Create one Module
     * const Module = await prisma.module.create({
     *   data: {
     *     // ... data to create a Module
     *   }
     * })
     * 
     */
    create<T extends ModuleCreateArgs>(args: SelectSubset<T, ModuleCreateArgs<ExtArgs>>): Prisma__ModuleClient<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Modules.
     * @param {ModuleCreateManyArgs} args - Arguments to create many Modules.
     * @example
     * // Create many Modules
     * const module = await prisma.module.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ModuleCreateManyArgs>(args?: SelectSubset<T, ModuleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Modules and returns the data saved in the database.
     * @param {ModuleCreateManyAndReturnArgs} args - Arguments to create many Modules.
     * @example
     * // Create many Modules
     * const module = await prisma.module.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Modules and only return the `id`
     * const moduleWithIdOnly = await prisma.module.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ModuleCreateManyAndReturnArgs>(args?: SelectSubset<T, ModuleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Module.
     * @param {ModuleDeleteArgs} args - Arguments to delete one Module.
     * @example
     * // Delete one Module
     * const Module = await prisma.module.delete({
     *   where: {
     *     // ... filter to delete one Module
     *   }
     * })
     * 
     */
    delete<T extends ModuleDeleteArgs>(args: SelectSubset<T, ModuleDeleteArgs<ExtArgs>>): Prisma__ModuleClient<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Module.
     * @param {ModuleUpdateArgs} args - Arguments to update one Module.
     * @example
     * // Update one Module
     * const module = await prisma.module.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ModuleUpdateArgs>(args: SelectSubset<T, ModuleUpdateArgs<ExtArgs>>): Prisma__ModuleClient<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Modules.
     * @param {ModuleDeleteManyArgs} args - Arguments to filter Modules to delete.
     * @example
     * // Delete a few Modules
     * const { count } = await prisma.module.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ModuleDeleteManyArgs>(args?: SelectSubset<T, ModuleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Modules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModuleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Modules
     * const module = await prisma.module.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ModuleUpdateManyArgs>(args: SelectSubset<T, ModuleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Modules and returns the data updated in the database.
     * @param {ModuleUpdateManyAndReturnArgs} args - Arguments to update many Modules.
     * @example
     * // Update many Modules
     * const module = await prisma.module.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Modules and only return the `id`
     * const moduleWithIdOnly = await prisma.module.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ModuleUpdateManyAndReturnArgs>(args: SelectSubset<T, ModuleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Module.
     * @param {ModuleUpsertArgs} args - Arguments to update or create a Module.
     * @example
     * // Update or create a Module
     * const module = await prisma.module.upsert({
     *   create: {
     *     // ... data to create a Module
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Module we want to update
     *   }
     * })
     */
    upsert<T extends ModuleUpsertArgs>(args: SelectSubset<T, ModuleUpsertArgs<ExtArgs>>): Prisma__ModuleClient<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Modules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModuleCountArgs} args - Arguments to filter Modules to count.
     * @example
     * // Count the number of Modules
     * const count = await prisma.module.count({
     *   where: {
     *     // ... the filter for the Modules we want to count
     *   }
     * })
    **/
    count<T extends ModuleCountArgs>(
      args?: Subset<T, ModuleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ModuleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Module.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModuleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ModuleAggregateArgs>(args: Subset<T, ModuleAggregateArgs>): Prisma.PrismaPromise<GetModuleAggregateType<T>>

    /**
     * Group by Module.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModuleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ModuleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ModuleGroupByArgs['orderBy'] }
        : { orderBy?: ModuleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ModuleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetModuleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Module model
   */
  readonly fields: ModuleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Module.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ModuleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    moduleProblems<T extends Module$moduleProblemsArgs<ExtArgs> = {}>(args?: Subset<T, Module$moduleProblemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModuleProblemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    levelModules<T extends Module$levelModulesArgs<ExtArgs> = {}>(args?: Subset<T, Module$levelModulesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LevelModulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Module model
   */
  interface ModuleFieldRefs {
    readonly id: FieldRef<"Module", 'BigInt'>
    readonly name: FieldRef<"Module", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Module findUnique
   */
  export type ModuleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Module
     */
    omit?: ModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleInclude<ExtArgs> | null
    /**
     * Filter, which Module to fetch.
     */
    where: ModuleWhereUniqueInput
  }

  /**
   * Module findUniqueOrThrow
   */
  export type ModuleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Module
     */
    omit?: ModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleInclude<ExtArgs> | null
    /**
     * Filter, which Module to fetch.
     */
    where: ModuleWhereUniqueInput
  }

  /**
   * Module findFirst
   */
  export type ModuleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Module
     */
    omit?: ModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleInclude<ExtArgs> | null
    /**
     * Filter, which Module to fetch.
     */
    where?: ModuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Modules to fetch.
     */
    orderBy?: ModuleOrderByWithRelationInput | ModuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Modules.
     */
    cursor?: ModuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Modules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Modules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Modules.
     */
    distinct?: ModuleScalarFieldEnum | ModuleScalarFieldEnum[]
  }

  /**
   * Module findFirstOrThrow
   */
  export type ModuleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Module
     */
    omit?: ModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleInclude<ExtArgs> | null
    /**
     * Filter, which Module to fetch.
     */
    where?: ModuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Modules to fetch.
     */
    orderBy?: ModuleOrderByWithRelationInput | ModuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Modules.
     */
    cursor?: ModuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Modules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Modules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Modules.
     */
    distinct?: ModuleScalarFieldEnum | ModuleScalarFieldEnum[]
  }

  /**
   * Module findMany
   */
  export type ModuleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Module
     */
    omit?: ModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleInclude<ExtArgs> | null
    /**
     * Filter, which Modules to fetch.
     */
    where?: ModuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Modules to fetch.
     */
    orderBy?: ModuleOrderByWithRelationInput | ModuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Modules.
     */
    cursor?: ModuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Modules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Modules.
     */
    skip?: number
    distinct?: ModuleScalarFieldEnum | ModuleScalarFieldEnum[]
  }

  /**
   * Module create
   */
  export type ModuleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Module
     */
    omit?: ModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleInclude<ExtArgs> | null
    /**
     * The data needed to create a Module.
     */
    data: XOR<ModuleCreateInput, ModuleUncheckedCreateInput>
  }

  /**
   * Module createMany
   */
  export type ModuleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Modules.
     */
    data: ModuleCreateManyInput | ModuleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Module createManyAndReturn
   */
  export type ModuleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Module
     */
    omit?: ModuleOmit<ExtArgs> | null
    /**
     * The data used to create many Modules.
     */
    data: ModuleCreateManyInput | ModuleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Module update
   */
  export type ModuleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Module
     */
    omit?: ModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleInclude<ExtArgs> | null
    /**
     * The data needed to update a Module.
     */
    data: XOR<ModuleUpdateInput, ModuleUncheckedUpdateInput>
    /**
     * Choose, which Module to update.
     */
    where: ModuleWhereUniqueInput
  }

  /**
   * Module updateMany
   */
  export type ModuleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Modules.
     */
    data: XOR<ModuleUpdateManyMutationInput, ModuleUncheckedUpdateManyInput>
    /**
     * Filter which Modules to update
     */
    where?: ModuleWhereInput
    /**
     * Limit how many Modules to update.
     */
    limit?: number
  }

  /**
   * Module updateManyAndReturn
   */
  export type ModuleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Module
     */
    omit?: ModuleOmit<ExtArgs> | null
    /**
     * The data used to update Modules.
     */
    data: XOR<ModuleUpdateManyMutationInput, ModuleUncheckedUpdateManyInput>
    /**
     * Filter which Modules to update
     */
    where?: ModuleWhereInput
    /**
     * Limit how many Modules to update.
     */
    limit?: number
  }

  /**
   * Module upsert
   */
  export type ModuleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Module
     */
    omit?: ModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleInclude<ExtArgs> | null
    /**
     * The filter to search for the Module to update in case it exists.
     */
    where: ModuleWhereUniqueInput
    /**
     * In case the Module found by the `where` argument doesn't exist, create a new Module with this data.
     */
    create: XOR<ModuleCreateInput, ModuleUncheckedCreateInput>
    /**
     * In case the Module was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ModuleUpdateInput, ModuleUncheckedUpdateInput>
  }

  /**
   * Module delete
   */
  export type ModuleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Module
     */
    omit?: ModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleInclude<ExtArgs> | null
    /**
     * Filter which Module to delete.
     */
    where: ModuleWhereUniqueInput
  }

  /**
   * Module deleteMany
   */
  export type ModuleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Modules to delete
     */
    where?: ModuleWhereInput
    /**
     * Limit how many Modules to delete.
     */
    limit?: number
  }

  /**
   * Module.moduleProblems
   */
  export type Module$moduleProblemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModuleProblem
     */
    select?: ModuleProblemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModuleProblem
     */
    omit?: ModuleProblemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleProblemInclude<ExtArgs> | null
    where?: ModuleProblemWhereInput
    orderBy?: ModuleProblemOrderByWithRelationInput | ModuleProblemOrderByWithRelationInput[]
    cursor?: ModuleProblemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ModuleProblemScalarFieldEnum | ModuleProblemScalarFieldEnum[]
  }

  /**
   * Module.levelModules
   */
  export type Module$levelModulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LevelModule
     */
    select?: LevelModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LevelModule
     */
    omit?: LevelModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LevelModuleInclude<ExtArgs> | null
    where?: LevelModuleWhereInput
    orderBy?: LevelModuleOrderByWithRelationInput | LevelModuleOrderByWithRelationInput[]
    cursor?: LevelModuleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LevelModuleScalarFieldEnum | LevelModuleScalarFieldEnum[]
  }

  /**
   * Module without action
   */
  export type ModuleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Module
     */
    omit?: ModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleInclude<ExtArgs> | null
  }


  /**
   * Model ModuleProblem
   */

  export type AggregateModuleProblem = {
    _count: ModuleProblemCountAggregateOutputType | null
    _avg: ModuleProblemAvgAggregateOutputType | null
    _sum: ModuleProblemSumAggregateOutputType | null
    _min: ModuleProblemMinAggregateOutputType | null
    _max: ModuleProblemMaxAggregateOutputType | null
  }

  export type ModuleProblemAvgAggregateOutputType = {
    id: number | null
    moduleId: number | null
    problemId: number | null
  }

  export type ModuleProblemSumAggregateOutputType = {
    id: bigint | null
    moduleId: bigint | null
    problemId: bigint | null
  }

  export type ModuleProblemMinAggregateOutputType = {
    id: bigint | null
    moduleId: bigint | null
    problemId: bigint | null
    type: $Enums.ProblemType | null
    difficulty: $Enums.ProblemDifficulty | null
  }

  export type ModuleProblemMaxAggregateOutputType = {
    id: bigint | null
    moduleId: bigint | null
    problemId: bigint | null
    type: $Enums.ProblemType | null
    difficulty: $Enums.ProblemDifficulty | null
  }

  export type ModuleProblemCountAggregateOutputType = {
    id: number
    moduleId: number
    problemId: number
    type: number
    difficulty: number
    _all: number
  }


  export type ModuleProblemAvgAggregateInputType = {
    id?: true
    moduleId?: true
    problemId?: true
  }

  export type ModuleProblemSumAggregateInputType = {
    id?: true
    moduleId?: true
    problemId?: true
  }

  export type ModuleProblemMinAggregateInputType = {
    id?: true
    moduleId?: true
    problemId?: true
    type?: true
    difficulty?: true
  }

  export type ModuleProblemMaxAggregateInputType = {
    id?: true
    moduleId?: true
    problemId?: true
    type?: true
    difficulty?: true
  }

  export type ModuleProblemCountAggregateInputType = {
    id?: true
    moduleId?: true
    problemId?: true
    type?: true
    difficulty?: true
    _all?: true
  }

  export type ModuleProblemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ModuleProblem to aggregate.
     */
    where?: ModuleProblemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ModuleProblems to fetch.
     */
    orderBy?: ModuleProblemOrderByWithRelationInput | ModuleProblemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ModuleProblemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ModuleProblems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ModuleProblems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ModuleProblems
    **/
    _count?: true | ModuleProblemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ModuleProblemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ModuleProblemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ModuleProblemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ModuleProblemMaxAggregateInputType
  }

  export type GetModuleProblemAggregateType<T extends ModuleProblemAggregateArgs> = {
        [P in keyof T & keyof AggregateModuleProblem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateModuleProblem[P]>
      : GetScalarType<T[P], AggregateModuleProblem[P]>
  }




  export type ModuleProblemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ModuleProblemWhereInput
    orderBy?: ModuleProblemOrderByWithAggregationInput | ModuleProblemOrderByWithAggregationInput[]
    by: ModuleProblemScalarFieldEnum[] | ModuleProblemScalarFieldEnum
    having?: ModuleProblemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ModuleProblemCountAggregateInputType | true
    _avg?: ModuleProblemAvgAggregateInputType
    _sum?: ModuleProblemSumAggregateInputType
    _min?: ModuleProblemMinAggregateInputType
    _max?: ModuleProblemMaxAggregateInputType
  }

  export type ModuleProblemGroupByOutputType = {
    id: bigint
    moduleId: bigint
    problemId: bigint
    type: $Enums.ProblemType
    difficulty: $Enums.ProblemDifficulty
    _count: ModuleProblemCountAggregateOutputType | null
    _avg: ModuleProblemAvgAggregateOutputType | null
    _sum: ModuleProblemSumAggregateOutputType | null
    _min: ModuleProblemMinAggregateOutputType | null
    _max: ModuleProblemMaxAggregateOutputType | null
  }

  type GetModuleProblemGroupByPayload<T extends ModuleProblemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ModuleProblemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ModuleProblemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ModuleProblemGroupByOutputType[P]>
            : GetScalarType<T[P], ModuleProblemGroupByOutputType[P]>
        }
      >
    >


  export type ModuleProblemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    moduleId?: boolean
    problemId?: boolean
    type?: boolean
    difficulty?: boolean
    module?: boolean | ModuleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["moduleProblem"]>

  export type ModuleProblemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    moduleId?: boolean
    problemId?: boolean
    type?: boolean
    difficulty?: boolean
    module?: boolean | ModuleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["moduleProblem"]>

  export type ModuleProblemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    moduleId?: boolean
    problemId?: boolean
    type?: boolean
    difficulty?: boolean
    module?: boolean | ModuleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["moduleProblem"]>

  export type ModuleProblemSelectScalar = {
    id?: boolean
    moduleId?: boolean
    problemId?: boolean
    type?: boolean
    difficulty?: boolean
  }

  export type ModuleProblemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "moduleId" | "problemId" | "type" | "difficulty", ExtArgs["result"]["moduleProblem"]>
  export type ModuleProblemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    module?: boolean | ModuleDefaultArgs<ExtArgs>
  }
  export type ModuleProblemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    module?: boolean | ModuleDefaultArgs<ExtArgs>
  }
  export type ModuleProblemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    module?: boolean | ModuleDefaultArgs<ExtArgs>
  }

  export type $ModuleProblemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ModuleProblem"
    objects: {
      module: Prisma.$ModulePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      moduleId: bigint
      problemId: bigint
      type: $Enums.ProblemType
      difficulty: $Enums.ProblemDifficulty
    }, ExtArgs["result"]["moduleProblem"]>
    composites: {}
  }

  type ModuleProblemGetPayload<S extends boolean | null | undefined | ModuleProblemDefaultArgs> = $Result.GetResult<Prisma.$ModuleProblemPayload, S>

  type ModuleProblemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ModuleProblemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ModuleProblemCountAggregateInputType | true
    }

  export interface ModuleProblemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ModuleProblem'], meta: { name: 'ModuleProblem' } }
    /**
     * Find zero or one ModuleProblem that matches the filter.
     * @param {ModuleProblemFindUniqueArgs} args - Arguments to find a ModuleProblem
     * @example
     * // Get one ModuleProblem
     * const moduleProblem = await prisma.moduleProblem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ModuleProblemFindUniqueArgs>(args: SelectSubset<T, ModuleProblemFindUniqueArgs<ExtArgs>>): Prisma__ModuleProblemClient<$Result.GetResult<Prisma.$ModuleProblemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ModuleProblem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ModuleProblemFindUniqueOrThrowArgs} args - Arguments to find a ModuleProblem
     * @example
     * // Get one ModuleProblem
     * const moduleProblem = await prisma.moduleProblem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ModuleProblemFindUniqueOrThrowArgs>(args: SelectSubset<T, ModuleProblemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ModuleProblemClient<$Result.GetResult<Prisma.$ModuleProblemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ModuleProblem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModuleProblemFindFirstArgs} args - Arguments to find a ModuleProblem
     * @example
     * // Get one ModuleProblem
     * const moduleProblem = await prisma.moduleProblem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ModuleProblemFindFirstArgs>(args?: SelectSubset<T, ModuleProblemFindFirstArgs<ExtArgs>>): Prisma__ModuleProblemClient<$Result.GetResult<Prisma.$ModuleProblemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ModuleProblem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModuleProblemFindFirstOrThrowArgs} args - Arguments to find a ModuleProblem
     * @example
     * // Get one ModuleProblem
     * const moduleProblem = await prisma.moduleProblem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ModuleProblemFindFirstOrThrowArgs>(args?: SelectSubset<T, ModuleProblemFindFirstOrThrowArgs<ExtArgs>>): Prisma__ModuleProblemClient<$Result.GetResult<Prisma.$ModuleProblemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ModuleProblems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModuleProblemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ModuleProblems
     * const moduleProblems = await prisma.moduleProblem.findMany()
     * 
     * // Get first 10 ModuleProblems
     * const moduleProblems = await prisma.moduleProblem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const moduleProblemWithIdOnly = await prisma.moduleProblem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ModuleProblemFindManyArgs>(args?: SelectSubset<T, ModuleProblemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModuleProblemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ModuleProblem.
     * @param {ModuleProblemCreateArgs} args - Arguments to create a ModuleProblem.
     * @example
     * // Create one ModuleProblem
     * const ModuleProblem = await prisma.moduleProblem.create({
     *   data: {
     *     // ... data to create a ModuleProblem
     *   }
     * })
     * 
     */
    create<T extends ModuleProblemCreateArgs>(args: SelectSubset<T, ModuleProblemCreateArgs<ExtArgs>>): Prisma__ModuleProblemClient<$Result.GetResult<Prisma.$ModuleProblemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ModuleProblems.
     * @param {ModuleProblemCreateManyArgs} args - Arguments to create many ModuleProblems.
     * @example
     * // Create many ModuleProblems
     * const moduleProblem = await prisma.moduleProblem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ModuleProblemCreateManyArgs>(args?: SelectSubset<T, ModuleProblemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ModuleProblems and returns the data saved in the database.
     * @param {ModuleProblemCreateManyAndReturnArgs} args - Arguments to create many ModuleProblems.
     * @example
     * // Create many ModuleProblems
     * const moduleProblem = await prisma.moduleProblem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ModuleProblems and only return the `id`
     * const moduleProblemWithIdOnly = await prisma.moduleProblem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ModuleProblemCreateManyAndReturnArgs>(args?: SelectSubset<T, ModuleProblemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModuleProblemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ModuleProblem.
     * @param {ModuleProblemDeleteArgs} args - Arguments to delete one ModuleProblem.
     * @example
     * // Delete one ModuleProblem
     * const ModuleProblem = await prisma.moduleProblem.delete({
     *   where: {
     *     // ... filter to delete one ModuleProblem
     *   }
     * })
     * 
     */
    delete<T extends ModuleProblemDeleteArgs>(args: SelectSubset<T, ModuleProblemDeleteArgs<ExtArgs>>): Prisma__ModuleProblemClient<$Result.GetResult<Prisma.$ModuleProblemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ModuleProblem.
     * @param {ModuleProblemUpdateArgs} args - Arguments to update one ModuleProblem.
     * @example
     * // Update one ModuleProblem
     * const moduleProblem = await prisma.moduleProblem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ModuleProblemUpdateArgs>(args: SelectSubset<T, ModuleProblemUpdateArgs<ExtArgs>>): Prisma__ModuleProblemClient<$Result.GetResult<Prisma.$ModuleProblemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ModuleProblems.
     * @param {ModuleProblemDeleteManyArgs} args - Arguments to filter ModuleProblems to delete.
     * @example
     * // Delete a few ModuleProblems
     * const { count } = await prisma.moduleProblem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ModuleProblemDeleteManyArgs>(args?: SelectSubset<T, ModuleProblemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ModuleProblems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModuleProblemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ModuleProblems
     * const moduleProblem = await prisma.moduleProblem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ModuleProblemUpdateManyArgs>(args: SelectSubset<T, ModuleProblemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ModuleProblems and returns the data updated in the database.
     * @param {ModuleProblemUpdateManyAndReturnArgs} args - Arguments to update many ModuleProblems.
     * @example
     * // Update many ModuleProblems
     * const moduleProblem = await prisma.moduleProblem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ModuleProblems and only return the `id`
     * const moduleProblemWithIdOnly = await prisma.moduleProblem.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ModuleProblemUpdateManyAndReturnArgs>(args: SelectSubset<T, ModuleProblemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModuleProblemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ModuleProblem.
     * @param {ModuleProblemUpsertArgs} args - Arguments to update or create a ModuleProblem.
     * @example
     * // Update or create a ModuleProblem
     * const moduleProblem = await prisma.moduleProblem.upsert({
     *   create: {
     *     // ... data to create a ModuleProblem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ModuleProblem we want to update
     *   }
     * })
     */
    upsert<T extends ModuleProblemUpsertArgs>(args: SelectSubset<T, ModuleProblemUpsertArgs<ExtArgs>>): Prisma__ModuleProblemClient<$Result.GetResult<Prisma.$ModuleProblemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ModuleProblems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModuleProblemCountArgs} args - Arguments to filter ModuleProblems to count.
     * @example
     * // Count the number of ModuleProblems
     * const count = await prisma.moduleProblem.count({
     *   where: {
     *     // ... the filter for the ModuleProblems we want to count
     *   }
     * })
    **/
    count<T extends ModuleProblemCountArgs>(
      args?: Subset<T, ModuleProblemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ModuleProblemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ModuleProblem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModuleProblemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ModuleProblemAggregateArgs>(args: Subset<T, ModuleProblemAggregateArgs>): Prisma.PrismaPromise<GetModuleProblemAggregateType<T>>

    /**
     * Group by ModuleProblem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModuleProblemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ModuleProblemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ModuleProblemGroupByArgs['orderBy'] }
        : { orderBy?: ModuleProblemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ModuleProblemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetModuleProblemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ModuleProblem model
   */
  readonly fields: ModuleProblemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ModuleProblem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ModuleProblemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    module<T extends ModuleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ModuleDefaultArgs<ExtArgs>>): Prisma__ModuleClient<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ModuleProblem model
   */
  interface ModuleProblemFieldRefs {
    readonly id: FieldRef<"ModuleProblem", 'BigInt'>
    readonly moduleId: FieldRef<"ModuleProblem", 'BigInt'>
    readonly problemId: FieldRef<"ModuleProblem", 'BigInt'>
    readonly type: FieldRef<"ModuleProblem", 'ProblemType'>
    readonly difficulty: FieldRef<"ModuleProblem", 'ProblemDifficulty'>
  }
    

  // Custom InputTypes
  /**
   * ModuleProblem findUnique
   */
  export type ModuleProblemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModuleProblem
     */
    select?: ModuleProblemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModuleProblem
     */
    omit?: ModuleProblemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleProblemInclude<ExtArgs> | null
    /**
     * Filter, which ModuleProblem to fetch.
     */
    where: ModuleProblemWhereUniqueInput
  }

  /**
   * ModuleProblem findUniqueOrThrow
   */
  export type ModuleProblemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModuleProblem
     */
    select?: ModuleProblemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModuleProblem
     */
    omit?: ModuleProblemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleProblemInclude<ExtArgs> | null
    /**
     * Filter, which ModuleProblem to fetch.
     */
    where: ModuleProblemWhereUniqueInput
  }

  /**
   * ModuleProblem findFirst
   */
  export type ModuleProblemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModuleProblem
     */
    select?: ModuleProblemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModuleProblem
     */
    omit?: ModuleProblemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleProblemInclude<ExtArgs> | null
    /**
     * Filter, which ModuleProblem to fetch.
     */
    where?: ModuleProblemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ModuleProblems to fetch.
     */
    orderBy?: ModuleProblemOrderByWithRelationInput | ModuleProblemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ModuleProblems.
     */
    cursor?: ModuleProblemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ModuleProblems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ModuleProblems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ModuleProblems.
     */
    distinct?: ModuleProblemScalarFieldEnum | ModuleProblemScalarFieldEnum[]
  }

  /**
   * ModuleProblem findFirstOrThrow
   */
  export type ModuleProblemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModuleProblem
     */
    select?: ModuleProblemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModuleProblem
     */
    omit?: ModuleProblemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleProblemInclude<ExtArgs> | null
    /**
     * Filter, which ModuleProblem to fetch.
     */
    where?: ModuleProblemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ModuleProblems to fetch.
     */
    orderBy?: ModuleProblemOrderByWithRelationInput | ModuleProblemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ModuleProblems.
     */
    cursor?: ModuleProblemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ModuleProblems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ModuleProblems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ModuleProblems.
     */
    distinct?: ModuleProblemScalarFieldEnum | ModuleProblemScalarFieldEnum[]
  }

  /**
   * ModuleProblem findMany
   */
  export type ModuleProblemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModuleProblem
     */
    select?: ModuleProblemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModuleProblem
     */
    omit?: ModuleProblemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleProblemInclude<ExtArgs> | null
    /**
     * Filter, which ModuleProblems to fetch.
     */
    where?: ModuleProblemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ModuleProblems to fetch.
     */
    orderBy?: ModuleProblemOrderByWithRelationInput | ModuleProblemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ModuleProblems.
     */
    cursor?: ModuleProblemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ModuleProblems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ModuleProblems.
     */
    skip?: number
    distinct?: ModuleProblemScalarFieldEnum | ModuleProblemScalarFieldEnum[]
  }

  /**
   * ModuleProblem create
   */
  export type ModuleProblemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModuleProblem
     */
    select?: ModuleProblemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModuleProblem
     */
    omit?: ModuleProblemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleProblemInclude<ExtArgs> | null
    /**
     * The data needed to create a ModuleProblem.
     */
    data: XOR<ModuleProblemCreateInput, ModuleProblemUncheckedCreateInput>
  }

  /**
   * ModuleProblem createMany
   */
  export type ModuleProblemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ModuleProblems.
     */
    data: ModuleProblemCreateManyInput | ModuleProblemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ModuleProblem createManyAndReturn
   */
  export type ModuleProblemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModuleProblem
     */
    select?: ModuleProblemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ModuleProblem
     */
    omit?: ModuleProblemOmit<ExtArgs> | null
    /**
     * The data used to create many ModuleProblems.
     */
    data: ModuleProblemCreateManyInput | ModuleProblemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleProblemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ModuleProblem update
   */
  export type ModuleProblemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModuleProblem
     */
    select?: ModuleProblemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModuleProblem
     */
    omit?: ModuleProblemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleProblemInclude<ExtArgs> | null
    /**
     * The data needed to update a ModuleProblem.
     */
    data: XOR<ModuleProblemUpdateInput, ModuleProblemUncheckedUpdateInput>
    /**
     * Choose, which ModuleProblem to update.
     */
    where: ModuleProblemWhereUniqueInput
  }

  /**
   * ModuleProblem updateMany
   */
  export type ModuleProblemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ModuleProblems.
     */
    data: XOR<ModuleProblemUpdateManyMutationInput, ModuleProblemUncheckedUpdateManyInput>
    /**
     * Filter which ModuleProblems to update
     */
    where?: ModuleProblemWhereInput
    /**
     * Limit how many ModuleProblems to update.
     */
    limit?: number
  }

  /**
   * ModuleProblem updateManyAndReturn
   */
  export type ModuleProblemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModuleProblem
     */
    select?: ModuleProblemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ModuleProblem
     */
    omit?: ModuleProblemOmit<ExtArgs> | null
    /**
     * The data used to update ModuleProblems.
     */
    data: XOR<ModuleProblemUpdateManyMutationInput, ModuleProblemUncheckedUpdateManyInput>
    /**
     * Filter which ModuleProblems to update
     */
    where?: ModuleProblemWhereInput
    /**
     * Limit how many ModuleProblems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleProblemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ModuleProblem upsert
   */
  export type ModuleProblemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModuleProblem
     */
    select?: ModuleProblemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModuleProblem
     */
    omit?: ModuleProblemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleProblemInclude<ExtArgs> | null
    /**
     * The filter to search for the ModuleProblem to update in case it exists.
     */
    where: ModuleProblemWhereUniqueInput
    /**
     * In case the ModuleProblem found by the `where` argument doesn't exist, create a new ModuleProblem with this data.
     */
    create: XOR<ModuleProblemCreateInput, ModuleProblemUncheckedCreateInput>
    /**
     * In case the ModuleProblem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ModuleProblemUpdateInput, ModuleProblemUncheckedUpdateInput>
  }

  /**
   * ModuleProblem delete
   */
  export type ModuleProblemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModuleProblem
     */
    select?: ModuleProblemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModuleProblem
     */
    omit?: ModuleProblemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleProblemInclude<ExtArgs> | null
    /**
     * Filter which ModuleProblem to delete.
     */
    where: ModuleProblemWhereUniqueInput
  }

  /**
   * ModuleProblem deleteMany
   */
  export type ModuleProblemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ModuleProblems to delete
     */
    where?: ModuleProblemWhereInput
    /**
     * Limit how many ModuleProblems to delete.
     */
    limit?: number
  }

  /**
   * ModuleProblem without action
   */
  export type ModuleProblemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModuleProblem
     */
    select?: ModuleProblemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModuleProblem
     */
    omit?: ModuleProblemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleProblemInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: bigint | null
  }

  export type UserMinAggregateOutputType = {
    id: bigint | null
    name: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: bigint | null
    name: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: bigint
    name: string
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    solves?: boolean | User$solvesArgs<ExtArgs>
    userTracks?: boolean | User$userTracksArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    solves?: boolean | User$solvesArgs<ExtArgs>
    userTracks?: boolean | User$userTracksArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      solves: Prisma.$SolvePayload<ExtArgs>[]
      userTracks: Prisma.$UserTrackPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      name: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    solves<T extends User$solvesArgs<ExtArgs> = {}>(args?: Subset<T, User$solvesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SolvePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    userTracks<T extends User$userTracksArgs<ExtArgs> = {}>(args?: Subset<T, User$userTracksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserTrackPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'BigInt'>
    readonly name: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.solves
   */
  export type User$solvesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Solve
     */
    select?: SolveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Solve
     */
    omit?: SolveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolveInclude<ExtArgs> | null
    where?: SolveWhereInput
    orderBy?: SolveOrderByWithRelationInput | SolveOrderByWithRelationInput[]
    cursor?: SolveWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SolveScalarFieldEnum | SolveScalarFieldEnum[]
  }

  /**
   * User.userTracks
   */
  export type User$userTracksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTrack
     */
    select?: UserTrackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTrack
     */
    omit?: UserTrackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTrackInclude<ExtArgs> | null
    where?: UserTrackWhereInput
    orderBy?: UserTrackOrderByWithRelationInput | UserTrackOrderByWithRelationInput[]
    cursor?: UserTrackWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserTrackScalarFieldEnum | UserTrackScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Solve
   */

  export type AggregateSolve = {
    _count: SolveCountAggregateOutputType | null
    _avg: SolveAvgAggregateOutputType | null
    _sum: SolveSumAggregateOutputType | null
    _min: SolveMinAggregateOutputType | null
    _max: SolveMaxAggregateOutputType | null
  }

  export type SolveAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    problemId: number | null
    submitCount: number | null
    readTime: number | null
    thinkTime: number | null
    codeTime: number | null
    debugTime: number | null
  }

  export type SolveSumAggregateOutputType = {
    id: bigint | null
    userId: bigint | null
    problemId: bigint | null
    submitCount: number | null
    readTime: number | null
    thinkTime: number | null
    codeTime: number | null
    debugTime: number | null
  }

  export type SolveMinAggregateOutputType = {
    id: bigint | null
    userId: bigint | null
    problemId: bigint | null
    submitCount: number | null
    readTime: number | null
    thinkTime: number | null
    codeTime: number | null
    debugTime: number | null
    onYourOwn: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SolveMaxAggregateOutputType = {
    id: bigint | null
    userId: bigint | null
    problemId: bigint | null
    submitCount: number | null
    readTime: number | null
    thinkTime: number | null
    codeTime: number | null
    debugTime: number | null
    onYourOwn: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SolveCountAggregateOutputType = {
    id: number
    userId: number
    problemId: number
    submitCount: number
    readTime: number
    thinkTime: number
    codeTime: number
    debugTime: number
    onYourOwn: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SolveAvgAggregateInputType = {
    id?: true
    userId?: true
    problemId?: true
    submitCount?: true
    readTime?: true
    thinkTime?: true
    codeTime?: true
    debugTime?: true
  }

  export type SolveSumAggregateInputType = {
    id?: true
    userId?: true
    problemId?: true
    submitCount?: true
    readTime?: true
    thinkTime?: true
    codeTime?: true
    debugTime?: true
  }

  export type SolveMinAggregateInputType = {
    id?: true
    userId?: true
    problemId?: true
    submitCount?: true
    readTime?: true
    thinkTime?: true
    codeTime?: true
    debugTime?: true
    onYourOwn?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SolveMaxAggregateInputType = {
    id?: true
    userId?: true
    problemId?: true
    submitCount?: true
    readTime?: true
    thinkTime?: true
    codeTime?: true
    debugTime?: true
    onYourOwn?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SolveCountAggregateInputType = {
    id?: true
    userId?: true
    problemId?: true
    submitCount?: true
    readTime?: true
    thinkTime?: true
    codeTime?: true
    debugTime?: true
    onYourOwn?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SolveAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Solve to aggregate.
     */
    where?: SolveWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Solves to fetch.
     */
    orderBy?: SolveOrderByWithRelationInput | SolveOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SolveWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Solves from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Solves.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Solves
    **/
    _count?: true | SolveCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SolveAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SolveSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SolveMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SolveMaxAggregateInputType
  }

  export type GetSolveAggregateType<T extends SolveAggregateArgs> = {
        [P in keyof T & keyof AggregateSolve]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSolve[P]>
      : GetScalarType<T[P], AggregateSolve[P]>
  }




  export type SolveGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SolveWhereInput
    orderBy?: SolveOrderByWithAggregationInput | SolveOrderByWithAggregationInput[]
    by: SolveScalarFieldEnum[] | SolveScalarFieldEnum
    having?: SolveScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SolveCountAggregateInputType | true
    _avg?: SolveAvgAggregateInputType
    _sum?: SolveSumAggregateInputType
    _min?: SolveMinAggregateInputType
    _max?: SolveMaxAggregateInputType
  }

  export type SolveGroupByOutputType = {
    id: bigint
    userId: bigint
    problemId: bigint
    submitCount: number
    readTime: number
    thinkTime: number
    codeTime: number
    debugTime: number
    onYourOwn: boolean
    createdAt: Date
    updatedAt: Date
    _count: SolveCountAggregateOutputType | null
    _avg: SolveAvgAggregateOutputType | null
    _sum: SolveSumAggregateOutputType | null
    _min: SolveMinAggregateOutputType | null
    _max: SolveMaxAggregateOutputType | null
  }

  type GetSolveGroupByPayload<T extends SolveGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SolveGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SolveGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SolveGroupByOutputType[P]>
            : GetScalarType<T[P], SolveGroupByOutputType[P]>
        }
      >
    >


  export type SolveSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    problemId?: boolean
    submitCount?: boolean
    readTime?: boolean
    thinkTime?: boolean
    codeTime?: boolean
    debugTime?: boolean
    onYourOwn?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    problem?: boolean | ProblemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["solve"]>

  export type SolveSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    problemId?: boolean
    submitCount?: boolean
    readTime?: boolean
    thinkTime?: boolean
    codeTime?: boolean
    debugTime?: boolean
    onYourOwn?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    problem?: boolean | ProblemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["solve"]>

  export type SolveSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    problemId?: boolean
    submitCount?: boolean
    readTime?: boolean
    thinkTime?: boolean
    codeTime?: boolean
    debugTime?: boolean
    onYourOwn?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    problem?: boolean | ProblemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["solve"]>

  export type SolveSelectScalar = {
    id?: boolean
    userId?: boolean
    problemId?: boolean
    submitCount?: boolean
    readTime?: boolean
    thinkTime?: boolean
    codeTime?: boolean
    debugTime?: boolean
    onYourOwn?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SolveOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "problemId" | "submitCount" | "readTime" | "thinkTime" | "codeTime" | "debugTime" | "onYourOwn" | "createdAt" | "updatedAt", ExtArgs["result"]["solve"]>
  export type SolveInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    problem?: boolean | ProblemDefaultArgs<ExtArgs>
  }
  export type SolveIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    problem?: boolean | ProblemDefaultArgs<ExtArgs>
  }
  export type SolveIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    problem?: boolean | ProblemDefaultArgs<ExtArgs>
  }

  export type $SolvePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Solve"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      problem: Prisma.$ProblemPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      userId: bigint
      problemId: bigint
      submitCount: number
      readTime: number
      thinkTime: number
      codeTime: number
      debugTime: number
      onYourOwn: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["solve"]>
    composites: {}
  }

  type SolveGetPayload<S extends boolean | null | undefined | SolveDefaultArgs> = $Result.GetResult<Prisma.$SolvePayload, S>

  type SolveCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SolveFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SolveCountAggregateInputType | true
    }

  export interface SolveDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Solve'], meta: { name: 'Solve' } }
    /**
     * Find zero or one Solve that matches the filter.
     * @param {SolveFindUniqueArgs} args - Arguments to find a Solve
     * @example
     * // Get one Solve
     * const solve = await prisma.solve.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SolveFindUniqueArgs>(args: SelectSubset<T, SolveFindUniqueArgs<ExtArgs>>): Prisma__SolveClient<$Result.GetResult<Prisma.$SolvePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Solve that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SolveFindUniqueOrThrowArgs} args - Arguments to find a Solve
     * @example
     * // Get one Solve
     * const solve = await prisma.solve.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SolveFindUniqueOrThrowArgs>(args: SelectSubset<T, SolveFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SolveClient<$Result.GetResult<Prisma.$SolvePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Solve that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SolveFindFirstArgs} args - Arguments to find a Solve
     * @example
     * // Get one Solve
     * const solve = await prisma.solve.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SolveFindFirstArgs>(args?: SelectSubset<T, SolveFindFirstArgs<ExtArgs>>): Prisma__SolveClient<$Result.GetResult<Prisma.$SolvePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Solve that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SolveFindFirstOrThrowArgs} args - Arguments to find a Solve
     * @example
     * // Get one Solve
     * const solve = await prisma.solve.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SolveFindFirstOrThrowArgs>(args?: SelectSubset<T, SolveFindFirstOrThrowArgs<ExtArgs>>): Prisma__SolveClient<$Result.GetResult<Prisma.$SolvePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Solves that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SolveFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Solves
     * const solves = await prisma.solve.findMany()
     * 
     * // Get first 10 Solves
     * const solves = await prisma.solve.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const solveWithIdOnly = await prisma.solve.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SolveFindManyArgs>(args?: SelectSubset<T, SolveFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SolvePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Solve.
     * @param {SolveCreateArgs} args - Arguments to create a Solve.
     * @example
     * // Create one Solve
     * const Solve = await prisma.solve.create({
     *   data: {
     *     // ... data to create a Solve
     *   }
     * })
     * 
     */
    create<T extends SolveCreateArgs>(args: SelectSubset<T, SolveCreateArgs<ExtArgs>>): Prisma__SolveClient<$Result.GetResult<Prisma.$SolvePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Solves.
     * @param {SolveCreateManyArgs} args - Arguments to create many Solves.
     * @example
     * // Create many Solves
     * const solve = await prisma.solve.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SolveCreateManyArgs>(args?: SelectSubset<T, SolveCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Solves and returns the data saved in the database.
     * @param {SolveCreateManyAndReturnArgs} args - Arguments to create many Solves.
     * @example
     * // Create many Solves
     * const solve = await prisma.solve.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Solves and only return the `id`
     * const solveWithIdOnly = await prisma.solve.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SolveCreateManyAndReturnArgs>(args?: SelectSubset<T, SolveCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SolvePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Solve.
     * @param {SolveDeleteArgs} args - Arguments to delete one Solve.
     * @example
     * // Delete one Solve
     * const Solve = await prisma.solve.delete({
     *   where: {
     *     // ... filter to delete one Solve
     *   }
     * })
     * 
     */
    delete<T extends SolveDeleteArgs>(args: SelectSubset<T, SolveDeleteArgs<ExtArgs>>): Prisma__SolveClient<$Result.GetResult<Prisma.$SolvePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Solve.
     * @param {SolveUpdateArgs} args - Arguments to update one Solve.
     * @example
     * // Update one Solve
     * const solve = await prisma.solve.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SolveUpdateArgs>(args: SelectSubset<T, SolveUpdateArgs<ExtArgs>>): Prisma__SolveClient<$Result.GetResult<Prisma.$SolvePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Solves.
     * @param {SolveDeleteManyArgs} args - Arguments to filter Solves to delete.
     * @example
     * // Delete a few Solves
     * const { count } = await prisma.solve.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SolveDeleteManyArgs>(args?: SelectSubset<T, SolveDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Solves.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SolveUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Solves
     * const solve = await prisma.solve.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SolveUpdateManyArgs>(args: SelectSubset<T, SolveUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Solves and returns the data updated in the database.
     * @param {SolveUpdateManyAndReturnArgs} args - Arguments to update many Solves.
     * @example
     * // Update many Solves
     * const solve = await prisma.solve.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Solves and only return the `id`
     * const solveWithIdOnly = await prisma.solve.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SolveUpdateManyAndReturnArgs>(args: SelectSubset<T, SolveUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SolvePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Solve.
     * @param {SolveUpsertArgs} args - Arguments to update or create a Solve.
     * @example
     * // Update or create a Solve
     * const solve = await prisma.solve.upsert({
     *   create: {
     *     // ... data to create a Solve
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Solve we want to update
     *   }
     * })
     */
    upsert<T extends SolveUpsertArgs>(args: SelectSubset<T, SolveUpsertArgs<ExtArgs>>): Prisma__SolveClient<$Result.GetResult<Prisma.$SolvePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Solves.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SolveCountArgs} args - Arguments to filter Solves to count.
     * @example
     * // Count the number of Solves
     * const count = await prisma.solve.count({
     *   where: {
     *     // ... the filter for the Solves we want to count
     *   }
     * })
    **/
    count<T extends SolveCountArgs>(
      args?: Subset<T, SolveCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SolveCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Solve.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SolveAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SolveAggregateArgs>(args: Subset<T, SolveAggregateArgs>): Prisma.PrismaPromise<GetSolveAggregateType<T>>

    /**
     * Group by Solve.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SolveGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SolveGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SolveGroupByArgs['orderBy'] }
        : { orderBy?: SolveGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SolveGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSolveGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Solve model
   */
  readonly fields: SolveFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Solve.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SolveClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    problem<T extends ProblemDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProblemDefaultArgs<ExtArgs>>): Prisma__ProblemClient<$Result.GetResult<Prisma.$ProblemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Solve model
   */
  interface SolveFieldRefs {
    readonly id: FieldRef<"Solve", 'BigInt'>
    readonly userId: FieldRef<"Solve", 'BigInt'>
    readonly problemId: FieldRef<"Solve", 'BigInt'>
    readonly submitCount: FieldRef<"Solve", 'Int'>
    readonly readTime: FieldRef<"Solve", 'Int'>
    readonly thinkTime: FieldRef<"Solve", 'Int'>
    readonly codeTime: FieldRef<"Solve", 'Int'>
    readonly debugTime: FieldRef<"Solve", 'Int'>
    readonly onYourOwn: FieldRef<"Solve", 'Boolean'>
    readonly createdAt: FieldRef<"Solve", 'DateTime'>
    readonly updatedAt: FieldRef<"Solve", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Solve findUnique
   */
  export type SolveFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Solve
     */
    select?: SolveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Solve
     */
    omit?: SolveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolveInclude<ExtArgs> | null
    /**
     * Filter, which Solve to fetch.
     */
    where: SolveWhereUniqueInput
  }

  /**
   * Solve findUniqueOrThrow
   */
  export type SolveFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Solve
     */
    select?: SolveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Solve
     */
    omit?: SolveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolveInclude<ExtArgs> | null
    /**
     * Filter, which Solve to fetch.
     */
    where: SolveWhereUniqueInput
  }

  /**
   * Solve findFirst
   */
  export type SolveFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Solve
     */
    select?: SolveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Solve
     */
    omit?: SolveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolveInclude<ExtArgs> | null
    /**
     * Filter, which Solve to fetch.
     */
    where?: SolveWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Solves to fetch.
     */
    orderBy?: SolveOrderByWithRelationInput | SolveOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Solves.
     */
    cursor?: SolveWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Solves from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Solves.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Solves.
     */
    distinct?: SolveScalarFieldEnum | SolveScalarFieldEnum[]
  }

  /**
   * Solve findFirstOrThrow
   */
  export type SolveFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Solve
     */
    select?: SolveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Solve
     */
    omit?: SolveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolveInclude<ExtArgs> | null
    /**
     * Filter, which Solve to fetch.
     */
    where?: SolveWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Solves to fetch.
     */
    orderBy?: SolveOrderByWithRelationInput | SolveOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Solves.
     */
    cursor?: SolveWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Solves from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Solves.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Solves.
     */
    distinct?: SolveScalarFieldEnum | SolveScalarFieldEnum[]
  }

  /**
   * Solve findMany
   */
  export type SolveFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Solve
     */
    select?: SolveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Solve
     */
    omit?: SolveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolveInclude<ExtArgs> | null
    /**
     * Filter, which Solves to fetch.
     */
    where?: SolveWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Solves to fetch.
     */
    orderBy?: SolveOrderByWithRelationInput | SolveOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Solves.
     */
    cursor?: SolveWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Solves from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Solves.
     */
    skip?: number
    distinct?: SolveScalarFieldEnum | SolveScalarFieldEnum[]
  }

  /**
   * Solve create
   */
  export type SolveCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Solve
     */
    select?: SolveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Solve
     */
    omit?: SolveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolveInclude<ExtArgs> | null
    /**
     * The data needed to create a Solve.
     */
    data: XOR<SolveCreateInput, SolveUncheckedCreateInput>
  }

  /**
   * Solve createMany
   */
  export type SolveCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Solves.
     */
    data: SolveCreateManyInput | SolveCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Solve createManyAndReturn
   */
  export type SolveCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Solve
     */
    select?: SolveSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Solve
     */
    omit?: SolveOmit<ExtArgs> | null
    /**
     * The data used to create many Solves.
     */
    data: SolveCreateManyInput | SolveCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolveIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Solve update
   */
  export type SolveUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Solve
     */
    select?: SolveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Solve
     */
    omit?: SolveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolveInclude<ExtArgs> | null
    /**
     * The data needed to update a Solve.
     */
    data: XOR<SolveUpdateInput, SolveUncheckedUpdateInput>
    /**
     * Choose, which Solve to update.
     */
    where: SolveWhereUniqueInput
  }

  /**
   * Solve updateMany
   */
  export type SolveUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Solves.
     */
    data: XOR<SolveUpdateManyMutationInput, SolveUncheckedUpdateManyInput>
    /**
     * Filter which Solves to update
     */
    where?: SolveWhereInput
    /**
     * Limit how many Solves to update.
     */
    limit?: number
  }

  /**
   * Solve updateManyAndReturn
   */
  export type SolveUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Solve
     */
    select?: SolveSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Solve
     */
    omit?: SolveOmit<ExtArgs> | null
    /**
     * The data used to update Solves.
     */
    data: XOR<SolveUpdateManyMutationInput, SolveUncheckedUpdateManyInput>
    /**
     * Filter which Solves to update
     */
    where?: SolveWhereInput
    /**
     * Limit how many Solves to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolveIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Solve upsert
   */
  export type SolveUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Solve
     */
    select?: SolveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Solve
     */
    omit?: SolveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolveInclude<ExtArgs> | null
    /**
     * The filter to search for the Solve to update in case it exists.
     */
    where: SolveWhereUniqueInput
    /**
     * In case the Solve found by the `where` argument doesn't exist, create a new Solve with this data.
     */
    create: XOR<SolveCreateInput, SolveUncheckedCreateInput>
    /**
     * In case the Solve was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SolveUpdateInput, SolveUncheckedUpdateInput>
  }

  /**
   * Solve delete
   */
  export type SolveDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Solve
     */
    select?: SolveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Solve
     */
    omit?: SolveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolveInclude<ExtArgs> | null
    /**
     * Filter which Solve to delete.
     */
    where: SolveWhereUniqueInput
  }

  /**
   * Solve deleteMany
   */
  export type SolveDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Solves to delete
     */
    where?: SolveWhereInput
    /**
     * Limit how many Solves to delete.
     */
    limit?: number
  }

  /**
   * Solve without action
   */
  export type SolveDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Solve
     */
    select?: SolveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Solve
     */
    omit?: SolveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolveInclude<ExtArgs> | null
  }


  /**
   * Model UserTrack
   */

  export type AggregateUserTrack = {
    _count: UserTrackCountAggregateOutputType | null
    _avg: UserTrackAvgAggregateOutputType | null
    _sum: UserTrackSumAggregateOutputType | null
    _min: UserTrackMinAggregateOutputType | null
    _max: UserTrackMaxAggregateOutputType | null
  }

  export type UserTrackAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    trackId: number | null
  }

  export type UserTrackSumAggregateOutputType = {
    id: bigint | null
    userId: bigint | null
    trackId: bigint | null
  }

  export type UserTrackMinAggregateOutputType = {
    id: bigint | null
    userId: bigint | null
    trackId: bigint | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserTrackMaxAggregateOutputType = {
    id: bigint | null
    userId: bigint | null
    trackId: bigint | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserTrackCountAggregateOutputType = {
    id: number
    userId: number
    trackId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserTrackAvgAggregateInputType = {
    id?: true
    userId?: true
    trackId?: true
  }

  export type UserTrackSumAggregateInputType = {
    id?: true
    userId?: true
    trackId?: true
  }

  export type UserTrackMinAggregateInputType = {
    id?: true
    userId?: true
    trackId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserTrackMaxAggregateInputType = {
    id?: true
    userId?: true
    trackId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserTrackCountAggregateInputType = {
    id?: true
    userId?: true
    trackId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserTrackAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserTrack to aggregate.
     */
    where?: UserTrackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserTracks to fetch.
     */
    orderBy?: UserTrackOrderByWithRelationInput | UserTrackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserTrackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserTracks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserTracks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserTracks
    **/
    _count?: true | UserTrackCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserTrackAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserTrackSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserTrackMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserTrackMaxAggregateInputType
  }

  export type GetUserTrackAggregateType<T extends UserTrackAggregateArgs> = {
        [P in keyof T & keyof AggregateUserTrack]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserTrack[P]>
      : GetScalarType<T[P], AggregateUserTrack[P]>
  }




  export type UserTrackGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserTrackWhereInput
    orderBy?: UserTrackOrderByWithAggregationInput | UserTrackOrderByWithAggregationInput[]
    by: UserTrackScalarFieldEnum[] | UserTrackScalarFieldEnum
    having?: UserTrackScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserTrackCountAggregateInputType | true
    _avg?: UserTrackAvgAggregateInputType
    _sum?: UserTrackSumAggregateInputType
    _min?: UserTrackMinAggregateInputType
    _max?: UserTrackMaxAggregateInputType
  }

  export type UserTrackGroupByOutputType = {
    id: bigint
    userId: bigint
    trackId: bigint
    createdAt: Date
    updatedAt: Date
    _count: UserTrackCountAggregateOutputType | null
    _avg: UserTrackAvgAggregateOutputType | null
    _sum: UserTrackSumAggregateOutputType | null
    _min: UserTrackMinAggregateOutputType | null
    _max: UserTrackMaxAggregateOutputType | null
  }

  type GetUserTrackGroupByPayload<T extends UserTrackGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserTrackGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserTrackGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserTrackGroupByOutputType[P]>
            : GetScalarType<T[P], UserTrackGroupByOutputType[P]>
        }
      >
    >


  export type UserTrackSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    trackId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    track?: boolean | TrackDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userTrack"]>

  export type UserTrackSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    trackId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    track?: boolean | TrackDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userTrack"]>

  export type UserTrackSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    trackId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    track?: boolean | TrackDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userTrack"]>

  export type UserTrackSelectScalar = {
    id?: boolean
    userId?: boolean
    trackId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserTrackOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "trackId" | "createdAt" | "updatedAt", ExtArgs["result"]["userTrack"]>
  export type UserTrackInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    track?: boolean | TrackDefaultArgs<ExtArgs>
  }
  export type UserTrackIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    track?: boolean | TrackDefaultArgs<ExtArgs>
  }
  export type UserTrackIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    track?: boolean | TrackDefaultArgs<ExtArgs>
  }

  export type $UserTrackPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserTrack"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      track: Prisma.$TrackPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      userId: bigint
      trackId: bigint
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["userTrack"]>
    composites: {}
  }

  type UserTrackGetPayload<S extends boolean | null | undefined | UserTrackDefaultArgs> = $Result.GetResult<Prisma.$UserTrackPayload, S>

  type UserTrackCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserTrackFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserTrackCountAggregateInputType | true
    }

  export interface UserTrackDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserTrack'], meta: { name: 'UserTrack' } }
    /**
     * Find zero or one UserTrack that matches the filter.
     * @param {UserTrackFindUniqueArgs} args - Arguments to find a UserTrack
     * @example
     * // Get one UserTrack
     * const userTrack = await prisma.userTrack.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserTrackFindUniqueArgs>(args: SelectSubset<T, UserTrackFindUniqueArgs<ExtArgs>>): Prisma__UserTrackClient<$Result.GetResult<Prisma.$UserTrackPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserTrack that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserTrackFindUniqueOrThrowArgs} args - Arguments to find a UserTrack
     * @example
     * // Get one UserTrack
     * const userTrack = await prisma.userTrack.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserTrackFindUniqueOrThrowArgs>(args: SelectSubset<T, UserTrackFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserTrackClient<$Result.GetResult<Prisma.$UserTrackPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserTrack that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserTrackFindFirstArgs} args - Arguments to find a UserTrack
     * @example
     * // Get one UserTrack
     * const userTrack = await prisma.userTrack.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserTrackFindFirstArgs>(args?: SelectSubset<T, UserTrackFindFirstArgs<ExtArgs>>): Prisma__UserTrackClient<$Result.GetResult<Prisma.$UserTrackPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserTrack that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserTrackFindFirstOrThrowArgs} args - Arguments to find a UserTrack
     * @example
     * // Get one UserTrack
     * const userTrack = await prisma.userTrack.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserTrackFindFirstOrThrowArgs>(args?: SelectSubset<T, UserTrackFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserTrackClient<$Result.GetResult<Prisma.$UserTrackPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserTracks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserTrackFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserTracks
     * const userTracks = await prisma.userTrack.findMany()
     * 
     * // Get first 10 UserTracks
     * const userTracks = await prisma.userTrack.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userTrackWithIdOnly = await prisma.userTrack.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserTrackFindManyArgs>(args?: SelectSubset<T, UserTrackFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserTrackPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserTrack.
     * @param {UserTrackCreateArgs} args - Arguments to create a UserTrack.
     * @example
     * // Create one UserTrack
     * const UserTrack = await prisma.userTrack.create({
     *   data: {
     *     // ... data to create a UserTrack
     *   }
     * })
     * 
     */
    create<T extends UserTrackCreateArgs>(args: SelectSubset<T, UserTrackCreateArgs<ExtArgs>>): Prisma__UserTrackClient<$Result.GetResult<Prisma.$UserTrackPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserTracks.
     * @param {UserTrackCreateManyArgs} args - Arguments to create many UserTracks.
     * @example
     * // Create many UserTracks
     * const userTrack = await prisma.userTrack.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserTrackCreateManyArgs>(args?: SelectSubset<T, UserTrackCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserTracks and returns the data saved in the database.
     * @param {UserTrackCreateManyAndReturnArgs} args - Arguments to create many UserTracks.
     * @example
     * // Create many UserTracks
     * const userTrack = await prisma.userTrack.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserTracks and only return the `id`
     * const userTrackWithIdOnly = await prisma.userTrack.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserTrackCreateManyAndReturnArgs>(args?: SelectSubset<T, UserTrackCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserTrackPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserTrack.
     * @param {UserTrackDeleteArgs} args - Arguments to delete one UserTrack.
     * @example
     * // Delete one UserTrack
     * const UserTrack = await prisma.userTrack.delete({
     *   where: {
     *     // ... filter to delete one UserTrack
     *   }
     * })
     * 
     */
    delete<T extends UserTrackDeleteArgs>(args: SelectSubset<T, UserTrackDeleteArgs<ExtArgs>>): Prisma__UserTrackClient<$Result.GetResult<Prisma.$UserTrackPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserTrack.
     * @param {UserTrackUpdateArgs} args - Arguments to update one UserTrack.
     * @example
     * // Update one UserTrack
     * const userTrack = await prisma.userTrack.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserTrackUpdateArgs>(args: SelectSubset<T, UserTrackUpdateArgs<ExtArgs>>): Prisma__UserTrackClient<$Result.GetResult<Prisma.$UserTrackPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserTracks.
     * @param {UserTrackDeleteManyArgs} args - Arguments to filter UserTracks to delete.
     * @example
     * // Delete a few UserTracks
     * const { count } = await prisma.userTrack.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserTrackDeleteManyArgs>(args?: SelectSubset<T, UserTrackDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserTracks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserTrackUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserTracks
     * const userTrack = await prisma.userTrack.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserTrackUpdateManyArgs>(args: SelectSubset<T, UserTrackUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserTracks and returns the data updated in the database.
     * @param {UserTrackUpdateManyAndReturnArgs} args - Arguments to update many UserTracks.
     * @example
     * // Update many UserTracks
     * const userTrack = await prisma.userTrack.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserTracks and only return the `id`
     * const userTrackWithIdOnly = await prisma.userTrack.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserTrackUpdateManyAndReturnArgs>(args: SelectSubset<T, UserTrackUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserTrackPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserTrack.
     * @param {UserTrackUpsertArgs} args - Arguments to update or create a UserTrack.
     * @example
     * // Update or create a UserTrack
     * const userTrack = await prisma.userTrack.upsert({
     *   create: {
     *     // ... data to create a UserTrack
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserTrack we want to update
     *   }
     * })
     */
    upsert<T extends UserTrackUpsertArgs>(args: SelectSubset<T, UserTrackUpsertArgs<ExtArgs>>): Prisma__UserTrackClient<$Result.GetResult<Prisma.$UserTrackPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserTracks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserTrackCountArgs} args - Arguments to filter UserTracks to count.
     * @example
     * // Count the number of UserTracks
     * const count = await prisma.userTrack.count({
     *   where: {
     *     // ... the filter for the UserTracks we want to count
     *   }
     * })
    **/
    count<T extends UserTrackCountArgs>(
      args?: Subset<T, UserTrackCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserTrackCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserTrack.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserTrackAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserTrackAggregateArgs>(args: Subset<T, UserTrackAggregateArgs>): Prisma.PrismaPromise<GetUserTrackAggregateType<T>>

    /**
     * Group by UserTrack.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserTrackGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserTrackGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserTrackGroupByArgs['orderBy'] }
        : { orderBy?: UserTrackGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserTrackGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserTrackGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserTrack model
   */
  readonly fields: UserTrackFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserTrack.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserTrackClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    track<T extends TrackDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TrackDefaultArgs<ExtArgs>>): Prisma__TrackClient<$Result.GetResult<Prisma.$TrackPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserTrack model
   */
  interface UserTrackFieldRefs {
    readonly id: FieldRef<"UserTrack", 'BigInt'>
    readonly userId: FieldRef<"UserTrack", 'BigInt'>
    readonly trackId: FieldRef<"UserTrack", 'BigInt'>
    readonly createdAt: FieldRef<"UserTrack", 'DateTime'>
    readonly updatedAt: FieldRef<"UserTrack", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserTrack findUnique
   */
  export type UserTrackFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTrack
     */
    select?: UserTrackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTrack
     */
    omit?: UserTrackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTrackInclude<ExtArgs> | null
    /**
     * Filter, which UserTrack to fetch.
     */
    where: UserTrackWhereUniqueInput
  }

  /**
   * UserTrack findUniqueOrThrow
   */
  export type UserTrackFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTrack
     */
    select?: UserTrackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTrack
     */
    omit?: UserTrackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTrackInclude<ExtArgs> | null
    /**
     * Filter, which UserTrack to fetch.
     */
    where: UserTrackWhereUniqueInput
  }

  /**
   * UserTrack findFirst
   */
  export type UserTrackFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTrack
     */
    select?: UserTrackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTrack
     */
    omit?: UserTrackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTrackInclude<ExtArgs> | null
    /**
     * Filter, which UserTrack to fetch.
     */
    where?: UserTrackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserTracks to fetch.
     */
    orderBy?: UserTrackOrderByWithRelationInput | UserTrackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserTracks.
     */
    cursor?: UserTrackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserTracks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserTracks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserTracks.
     */
    distinct?: UserTrackScalarFieldEnum | UserTrackScalarFieldEnum[]
  }

  /**
   * UserTrack findFirstOrThrow
   */
  export type UserTrackFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTrack
     */
    select?: UserTrackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTrack
     */
    omit?: UserTrackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTrackInclude<ExtArgs> | null
    /**
     * Filter, which UserTrack to fetch.
     */
    where?: UserTrackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserTracks to fetch.
     */
    orderBy?: UserTrackOrderByWithRelationInput | UserTrackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserTracks.
     */
    cursor?: UserTrackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserTracks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserTracks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserTracks.
     */
    distinct?: UserTrackScalarFieldEnum | UserTrackScalarFieldEnum[]
  }

  /**
   * UserTrack findMany
   */
  export type UserTrackFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTrack
     */
    select?: UserTrackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTrack
     */
    omit?: UserTrackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTrackInclude<ExtArgs> | null
    /**
     * Filter, which UserTracks to fetch.
     */
    where?: UserTrackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserTracks to fetch.
     */
    orderBy?: UserTrackOrderByWithRelationInput | UserTrackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserTracks.
     */
    cursor?: UserTrackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserTracks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserTracks.
     */
    skip?: number
    distinct?: UserTrackScalarFieldEnum | UserTrackScalarFieldEnum[]
  }

  /**
   * UserTrack create
   */
  export type UserTrackCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTrack
     */
    select?: UserTrackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTrack
     */
    omit?: UserTrackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTrackInclude<ExtArgs> | null
    /**
     * The data needed to create a UserTrack.
     */
    data: XOR<UserTrackCreateInput, UserTrackUncheckedCreateInput>
  }

  /**
   * UserTrack createMany
   */
  export type UserTrackCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserTracks.
     */
    data: UserTrackCreateManyInput | UserTrackCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserTrack createManyAndReturn
   */
  export type UserTrackCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTrack
     */
    select?: UserTrackSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserTrack
     */
    omit?: UserTrackOmit<ExtArgs> | null
    /**
     * The data used to create many UserTracks.
     */
    data: UserTrackCreateManyInput | UserTrackCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTrackIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserTrack update
   */
  export type UserTrackUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTrack
     */
    select?: UserTrackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTrack
     */
    omit?: UserTrackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTrackInclude<ExtArgs> | null
    /**
     * The data needed to update a UserTrack.
     */
    data: XOR<UserTrackUpdateInput, UserTrackUncheckedUpdateInput>
    /**
     * Choose, which UserTrack to update.
     */
    where: UserTrackWhereUniqueInput
  }

  /**
   * UserTrack updateMany
   */
  export type UserTrackUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserTracks.
     */
    data: XOR<UserTrackUpdateManyMutationInput, UserTrackUncheckedUpdateManyInput>
    /**
     * Filter which UserTracks to update
     */
    where?: UserTrackWhereInput
    /**
     * Limit how many UserTracks to update.
     */
    limit?: number
  }

  /**
   * UserTrack updateManyAndReturn
   */
  export type UserTrackUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTrack
     */
    select?: UserTrackSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserTrack
     */
    omit?: UserTrackOmit<ExtArgs> | null
    /**
     * The data used to update UserTracks.
     */
    data: XOR<UserTrackUpdateManyMutationInput, UserTrackUncheckedUpdateManyInput>
    /**
     * Filter which UserTracks to update
     */
    where?: UserTrackWhereInput
    /**
     * Limit how many UserTracks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTrackIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserTrack upsert
   */
  export type UserTrackUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTrack
     */
    select?: UserTrackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTrack
     */
    omit?: UserTrackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTrackInclude<ExtArgs> | null
    /**
     * The filter to search for the UserTrack to update in case it exists.
     */
    where: UserTrackWhereUniqueInput
    /**
     * In case the UserTrack found by the `where` argument doesn't exist, create a new UserTrack with this data.
     */
    create: XOR<UserTrackCreateInput, UserTrackUncheckedCreateInput>
    /**
     * In case the UserTrack was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserTrackUpdateInput, UserTrackUncheckedUpdateInput>
  }

  /**
   * UserTrack delete
   */
  export type UserTrackDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTrack
     */
    select?: UserTrackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTrack
     */
    omit?: UserTrackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTrackInclude<ExtArgs> | null
    /**
     * Filter which UserTrack to delete.
     */
    where: UserTrackWhereUniqueInput
  }

  /**
   * UserTrack deleteMany
   */
  export type UserTrackDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserTracks to delete
     */
    where?: UserTrackWhereInput
    /**
     * Limit how many UserTracks to delete.
     */
    limit?: number
  }

  /**
   * UserTrack without action
   */
  export type UserTrackDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTrack
     */
    select?: UserTrackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTrack
     */
    omit?: UserTrackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTrackInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ProblemScalarFieldEnum: {
    id: 'id',
    name: 'name',
    url: 'url'
  };

  export type ProblemScalarFieldEnum = (typeof ProblemScalarFieldEnum)[keyof typeof ProblemScalarFieldEnum]


  export const TrackScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type TrackScalarFieldEnum = (typeof TrackScalarFieldEnum)[keyof typeof TrackScalarFieldEnum]


  export const TrackLevelScalarFieldEnum: {
    id: 'id',
    trackId: 'trackId',
    code: 'code',
    order: 'order'
  };

  export type TrackLevelScalarFieldEnum = (typeof TrackLevelScalarFieldEnum)[keyof typeof TrackLevelScalarFieldEnum]


  export const LevelModuleScalarFieldEnum: {
    id: 'id',
    trackLevelId: 'trackLevelId',
    moduleId: 'moduleId',
    order: 'order'
  };

  export type LevelModuleScalarFieldEnum = (typeof LevelModuleScalarFieldEnum)[keyof typeof LevelModuleScalarFieldEnum]


  export const ModuleScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type ModuleScalarFieldEnum = (typeof ModuleScalarFieldEnum)[keyof typeof ModuleScalarFieldEnum]


  export const ModuleProblemScalarFieldEnum: {
    id: 'id',
    moduleId: 'moduleId',
    problemId: 'problemId',
    type: 'type',
    difficulty: 'difficulty'
  };

  export type ModuleProblemScalarFieldEnum = (typeof ModuleProblemScalarFieldEnum)[keyof typeof ModuleProblemScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SolveScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    problemId: 'problemId',
    submitCount: 'submitCount',
    readTime: 'readTime',
    thinkTime: 'thinkTime',
    codeTime: 'codeTime',
    debugTime: 'debugTime',
    onYourOwn: 'onYourOwn',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SolveScalarFieldEnum = (typeof SolveScalarFieldEnum)[keyof typeof SolveScalarFieldEnum]


  export const UserTrackScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    trackId: 'trackId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserTrackScalarFieldEnum = (typeof UserTrackScalarFieldEnum)[keyof typeof UserTrackScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'ProblemType'
   */
  export type EnumProblemTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProblemType'>
    


  /**
   * Reference to a field of type 'ProblemType[]'
   */
  export type ListEnumProblemTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProblemType[]'>
    


  /**
   * Reference to a field of type 'ProblemDifficulty'
   */
  export type EnumProblemDifficultyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProblemDifficulty'>
    


  /**
   * Reference to a field of type 'ProblemDifficulty[]'
   */
  export type ListEnumProblemDifficultyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProblemDifficulty[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type ProblemWhereInput = {
    AND?: ProblemWhereInput | ProblemWhereInput[]
    OR?: ProblemWhereInput[]
    NOT?: ProblemWhereInput | ProblemWhereInput[]
    id?: BigIntFilter<"Problem"> | bigint | number
    name?: StringFilter<"Problem"> | string
    url?: StringFilter<"Problem"> | string
    solves?: SolveListRelationFilter
  }

  export type ProblemOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrder
    solves?: SolveOrderByRelationAggregateInput
  }

  export type ProblemWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: ProblemWhereInput | ProblemWhereInput[]
    OR?: ProblemWhereInput[]
    NOT?: ProblemWhereInput | ProblemWhereInput[]
    name?: StringFilter<"Problem"> | string
    url?: StringFilter<"Problem"> | string
    solves?: SolveListRelationFilter
  }, "id">

  export type ProblemOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrder
    _count?: ProblemCountOrderByAggregateInput
    _avg?: ProblemAvgOrderByAggregateInput
    _max?: ProblemMaxOrderByAggregateInput
    _min?: ProblemMinOrderByAggregateInput
    _sum?: ProblemSumOrderByAggregateInput
  }

  export type ProblemScalarWhereWithAggregatesInput = {
    AND?: ProblemScalarWhereWithAggregatesInput | ProblemScalarWhereWithAggregatesInput[]
    OR?: ProblemScalarWhereWithAggregatesInput[]
    NOT?: ProblemScalarWhereWithAggregatesInput | ProblemScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"Problem"> | bigint | number
    name?: StringWithAggregatesFilter<"Problem"> | string
    url?: StringWithAggregatesFilter<"Problem"> | string
  }

  export type TrackWhereInput = {
    AND?: TrackWhereInput | TrackWhereInput[]
    OR?: TrackWhereInput[]
    NOT?: TrackWhereInput | TrackWhereInput[]
    id?: BigIntFilter<"Track"> | bigint | number
    name?: StringFilter<"Track"> | string
    levels?: TrackLevelListRelationFilter
    userTrack?: UserTrackListRelationFilter
  }

  export type TrackOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    levels?: TrackLevelOrderByRelationAggregateInput
    userTrack?: UserTrackOrderByRelationAggregateInput
  }

  export type TrackWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: TrackWhereInput | TrackWhereInput[]
    OR?: TrackWhereInput[]
    NOT?: TrackWhereInput | TrackWhereInput[]
    name?: StringFilter<"Track"> | string
    levels?: TrackLevelListRelationFilter
    userTrack?: UserTrackListRelationFilter
  }, "id">

  export type TrackOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: TrackCountOrderByAggregateInput
    _avg?: TrackAvgOrderByAggregateInput
    _max?: TrackMaxOrderByAggregateInput
    _min?: TrackMinOrderByAggregateInput
    _sum?: TrackSumOrderByAggregateInput
  }

  export type TrackScalarWhereWithAggregatesInput = {
    AND?: TrackScalarWhereWithAggregatesInput | TrackScalarWhereWithAggregatesInput[]
    OR?: TrackScalarWhereWithAggregatesInput[]
    NOT?: TrackScalarWhereWithAggregatesInput | TrackScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"Track"> | bigint | number
    name?: StringWithAggregatesFilter<"Track"> | string
  }

  export type TrackLevelWhereInput = {
    AND?: TrackLevelWhereInput | TrackLevelWhereInput[]
    OR?: TrackLevelWhereInput[]
    NOT?: TrackLevelWhereInput | TrackLevelWhereInput[]
    id?: BigIntFilter<"TrackLevel"> | bigint | number
    trackId?: BigIntFilter<"TrackLevel"> | bigint | number
    code?: StringFilter<"TrackLevel"> | string
    order?: IntFilter<"TrackLevel"> | number
    track?: XOR<TrackScalarRelationFilter, TrackWhereInput>
    levelModules?: LevelModuleListRelationFilter
  }

  export type TrackLevelOrderByWithRelationInput = {
    id?: SortOrder
    trackId?: SortOrder
    code?: SortOrder
    order?: SortOrder
    track?: TrackOrderByWithRelationInput
    levelModules?: LevelModuleOrderByRelationAggregateInput
  }

  export type TrackLevelWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    trackId_code?: TrackLevelTrackIdCodeCompoundUniqueInput
    AND?: TrackLevelWhereInput | TrackLevelWhereInput[]
    OR?: TrackLevelWhereInput[]
    NOT?: TrackLevelWhereInput | TrackLevelWhereInput[]
    trackId?: BigIntFilter<"TrackLevel"> | bigint | number
    code?: StringFilter<"TrackLevel"> | string
    order?: IntFilter<"TrackLevel"> | number
    track?: XOR<TrackScalarRelationFilter, TrackWhereInput>
    levelModules?: LevelModuleListRelationFilter
  }, "id" | "trackId_code">

  export type TrackLevelOrderByWithAggregationInput = {
    id?: SortOrder
    trackId?: SortOrder
    code?: SortOrder
    order?: SortOrder
    _count?: TrackLevelCountOrderByAggregateInput
    _avg?: TrackLevelAvgOrderByAggregateInput
    _max?: TrackLevelMaxOrderByAggregateInput
    _min?: TrackLevelMinOrderByAggregateInput
    _sum?: TrackLevelSumOrderByAggregateInput
  }

  export type TrackLevelScalarWhereWithAggregatesInput = {
    AND?: TrackLevelScalarWhereWithAggregatesInput | TrackLevelScalarWhereWithAggregatesInput[]
    OR?: TrackLevelScalarWhereWithAggregatesInput[]
    NOT?: TrackLevelScalarWhereWithAggregatesInput | TrackLevelScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"TrackLevel"> | bigint | number
    trackId?: BigIntWithAggregatesFilter<"TrackLevel"> | bigint | number
    code?: StringWithAggregatesFilter<"TrackLevel"> | string
    order?: IntWithAggregatesFilter<"TrackLevel"> | number
  }

  export type LevelModuleWhereInput = {
    AND?: LevelModuleWhereInput | LevelModuleWhereInput[]
    OR?: LevelModuleWhereInput[]
    NOT?: LevelModuleWhereInput | LevelModuleWhereInput[]
    id?: BigIntFilter<"LevelModule"> | bigint | number
    trackLevelId?: BigIntFilter<"LevelModule"> | bigint | number
    moduleId?: BigIntFilter<"LevelModule"> | bigint | number
    order?: IntFilter<"LevelModule"> | number
    trackLevel?: XOR<TrackLevelScalarRelationFilter, TrackLevelWhereInput>
    module?: XOR<ModuleScalarRelationFilter, ModuleWhereInput>
  }

  export type LevelModuleOrderByWithRelationInput = {
    id?: SortOrder
    trackLevelId?: SortOrder
    moduleId?: SortOrder
    order?: SortOrder
    trackLevel?: TrackLevelOrderByWithRelationInput
    module?: ModuleOrderByWithRelationInput
  }

  export type LevelModuleWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    trackLevelId_moduleId?: LevelModuleTrackLevelIdModuleIdCompoundUniqueInput
    AND?: LevelModuleWhereInput | LevelModuleWhereInput[]
    OR?: LevelModuleWhereInput[]
    NOT?: LevelModuleWhereInput | LevelModuleWhereInput[]
    trackLevelId?: BigIntFilter<"LevelModule"> | bigint | number
    moduleId?: BigIntFilter<"LevelModule"> | bigint | number
    order?: IntFilter<"LevelModule"> | number
    trackLevel?: XOR<TrackLevelScalarRelationFilter, TrackLevelWhereInput>
    module?: XOR<ModuleScalarRelationFilter, ModuleWhereInput>
  }, "id" | "trackLevelId_moduleId">

  export type LevelModuleOrderByWithAggregationInput = {
    id?: SortOrder
    trackLevelId?: SortOrder
    moduleId?: SortOrder
    order?: SortOrder
    _count?: LevelModuleCountOrderByAggregateInput
    _avg?: LevelModuleAvgOrderByAggregateInput
    _max?: LevelModuleMaxOrderByAggregateInput
    _min?: LevelModuleMinOrderByAggregateInput
    _sum?: LevelModuleSumOrderByAggregateInput
  }

  export type LevelModuleScalarWhereWithAggregatesInput = {
    AND?: LevelModuleScalarWhereWithAggregatesInput | LevelModuleScalarWhereWithAggregatesInput[]
    OR?: LevelModuleScalarWhereWithAggregatesInput[]
    NOT?: LevelModuleScalarWhereWithAggregatesInput | LevelModuleScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"LevelModule"> | bigint | number
    trackLevelId?: BigIntWithAggregatesFilter<"LevelModule"> | bigint | number
    moduleId?: BigIntWithAggregatesFilter<"LevelModule"> | bigint | number
    order?: IntWithAggregatesFilter<"LevelModule"> | number
  }

  export type ModuleWhereInput = {
    AND?: ModuleWhereInput | ModuleWhereInput[]
    OR?: ModuleWhereInput[]
    NOT?: ModuleWhereInput | ModuleWhereInput[]
    id?: BigIntFilter<"Module"> | bigint | number
    name?: StringFilter<"Module"> | string
    moduleProblems?: ModuleProblemListRelationFilter
    levelModules?: LevelModuleListRelationFilter
  }

  export type ModuleOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    moduleProblems?: ModuleProblemOrderByRelationAggregateInput
    levelModules?: LevelModuleOrderByRelationAggregateInput
  }

  export type ModuleWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: ModuleWhereInput | ModuleWhereInput[]
    OR?: ModuleWhereInput[]
    NOT?: ModuleWhereInput | ModuleWhereInput[]
    name?: StringFilter<"Module"> | string
    moduleProblems?: ModuleProblemListRelationFilter
    levelModules?: LevelModuleListRelationFilter
  }, "id">

  export type ModuleOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: ModuleCountOrderByAggregateInput
    _avg?: ModuleAvgOrderByAggregateInput
    _max?: ModuleMaxOrderByAggregateInput
    _min?: ModuleMinOrderByAggregateInput
    _sum?: ModuleSumOrderByAggregateInput
  }

  export type ModuleScalarWhereWithAggregatesInput = {
    AND?: ModuleScalarWhereWithAggregatesInput | ModuleScalarWhereWithAggregatesInput[]
    OR?: ModuleScalarWhereWithAggregatesInput[]
    NOT?: ModuleScalarWhereWithAggregatesInput | ModuleScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"Module"> | bigint | number
    name?: StringWithAggregatesFilter<"Module"> | string
  }

  export type ModuleProblemWhereInput = {
    AND?: ModuleProblemWhereInput | ModuleProblemWhereInput[]
    OR?: ModuleProblemWhereInput[]
    NOT?: ModuleProblemWhereInput | ModuleProblemWhereInput[]
    id?: BigIntFilter<"ModuleProblem"> | bigint | number
    moduleId?: BigIntFilter<"ModuleProblem"> | bigint | number
    problemId?: BigIntFilter<"ModuleProblem"> | bigint | number
    type?: EnumProblemTypeFilter<"ModuleProblem"> | $Enums.ProblemType
    difficulty?: EnumProblemDifficultyFilter<"ModuleProblem"> | $Enums.ProblemDifficulty
    module?: XOR<ModuleScalarRelationFilter, ModuleWhereInput>
  }

  export type ModuleProblemOrderByWithRelationInput = {
    id?: SortOrder
    moduleId?: SortOrder
    problemId?: SortOrder
    type?: SortOrder
    difficulty?: SortOrder
    module?: ModuleOrderByWithRelationInput
  }

  export type ModuleProblemWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    moduleId_problemId?: ModuleProblemModuleIdProblemIdCompoundUniqueInput
    AND?: ModuleProblemWhereInput | ModuleProblemWhereInput[]
    OR?: ModuleProblemWhereInput[]
    NOT?: ModuleProblemWhereInput | ModuleProblemWhereInput[]
    moduleId?: BigIntFilter<"ModuleProblem"> | bigint | number
    problemId?: BigIntFilter<"ModuleProblem"> | bigint | number
    type?: EnumProblemTypeFilter<"ModuleProblem"> | $Enums.ProblemType
    difficulty?: EnumProblemDifficultyFilter<"ModuleProblem"> | $Enums.ProblemDifficulty
    module?: XOR<ModuleScalarRelationFilter, ModuleWhereInput>
  }, "id" | "moduleId_problemId">

  export type ModuleProblemOrderByWithAggregationInput = {
    id?: SortOrder
    moduleId?: SortOrder
    problemId?: SortOrder
    type?: SortOrder
    difficulty?: SortOrder
    _count?: ModuleProblemCountOrderByAggregateInput
    _avg?: ModuleProblemAvgOrderByAggregateInput
    _max?: ModuleProblemMaxOrderByAggregateInput
    _min?: ModuleProblemMinOrderByAggregateInput
    _sum?: ModuleProblemSumOrderByAggregateInput
  }

  export type ModuleProblemScalarWhereWithAggregatesInput = {
    AND?: ModuleProblemScalarWhereWithAggregatesInput | ModuleProblemScalarWhereWithAggregatesInput[]
    OR?: ModuleProblemScalarWhereWithAggregatesInput[]
    NOT?: ModuleProblemScalarWhereWithAggregatesInput | ModuleProblemScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"ModuleProblem"> | bigint | number
    moduleId?: BigIntWithAggregatesFilter<"ModuleProblem"> | bigint | number
    problemId?: BigIntWithAggregatesFilter<"ModuleProblem"> | bigint | number
    type?: EnumProblemTypeWithAggregatesFilter<"ModuleProblem"> | $Enums.ProblemType
    difficulty?: EnumProblemDifficultyWithAggregatesFilter<"ModuleProblem"> | $Enums.ProblemDifficulty
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: BigIntFilter<"User"> | bigint | number
    name?: StringFilter<"User"> | string
    solves?: SolveListRelationFilter
    userTracks?: UserTrackListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    solves?: SolveOrderByRelationAggregateInput
    userTracks?: UserTrackOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    solves?: SolveListRelationFilter
    userTracks?: UserTrackListRelationFilter
  }, "id">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"User"> | bigint | number
    name?: StringWithAggregatesFilter<"User"> | string
  }

  export type SolveWhereInput = {
    AND?: SolveWhereInput | SolveWhereInput[]
    OR?: SolveWhereInput[]
    NOT?: SolveWhereInput | SolveWhereInput[]
    id?: BigIntFilter<"Solve"> | bigint | number
    userId?: BigIntFilter<"Solve"> | bigint | number
    problemId?: BigIntFilter<"Solve"> | bigint | number
    submitCount?: IntFilter<"Solve"> | number
    readTime?: IntFilter<"Solve"> | number
    thinkTime?: IntFilter<"Solve"> | number
    codeTime?: IntFilter<"Solve"> | number
    debugTime?: IntFilter<"Solve"> | number
    onYourOwn?: BoolFilter<"Solve"> | boolean
    createdAt?: DateTimeFilter<"Solve"> | Date | string
    updatedAt?: DateTimeFilter<"Solve"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    problem?: XOR<ProblemScalarRelationFilter, ProblemWhereInput>
  }

  export type SolveOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    problemId?: SortOrder
    submitCount?: SortOrder
    readTime?: SortOrder
    thinkTime?: SortOrder
    codeTime?: SortOrder
    debugTime?: SortOrder
    onYourOwn?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    problem?: ProblemOrderByWithRelationInput
  }

  export type SolveWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    userId_problemId?: SolveUserIdProblemIdCompoundUniqueInput
    AND?: SolveWhereInput | SolveWhereInput[]
    OR?: SolveWhereInput[]
    NOT?: SolveWhereInput | SolveWhereInput[]
    userId?: BigIntFilter<"Solve"> | bigint | number
    problemId?: BigIntFilter<"Solve"> | bigint | number
    submitCount?: IntFilter<"Solve"> | number
    readTime?: IntFilter<"Solve"> | number
    thinkTime?: IntFilter<"Solve"> | number
    codeTime?: IntFilter<"Solve"> | number
    debugTime?: IntFilter<"Solve"> | number
    onYourOwn?: BoolFilter<"Solve"> | boolean
    createdAt?: DateTimeFilter<"Solve"> | Date | string
    updatedAt?: DateTimeFilter<"Solve"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    problem?: XOR<ProblemScalarRelationFilter, ProblemWhereInput>
  }, "id" | "userId_problemId">

  export type SolveOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    problemId?: SortOrder
    submitCount?: SortOrder
    readTime?: SortOrder
    thinkTime?: SortOrder
    codeTime?: SortOrder
    debugTime?: SortOrder
    onYourOwn?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SolveCountOrderByAggregateInput
    _avg?: SolveAvgOrderByAggregateInput
    _max?: SolveMaxOrderByAggregateInput
    _min?: SolveMinOrderByAggregateInput
    _sum?: SolveSumOrderByAggregateInput
  }

  export type SolveScalarWhereWithAggregatesInput = {
    AND?: SolveScalarWhereWithAggregatesInput | SolveScalarWhereWithAggregatesInput[]
    OR?: SolveScalarWhereWithAggregatesInput[]
    NOT?: SolveScalarWhereWithAggregatesInput | SolveScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"Solve"> | bigint | number
    userId?: BigIntWithAggregatesFilter<"Solve"> | bigint | number
    problemId?: BigIntWithAggregatesFilter<"Solve"> | bigint | number
    submitCount?: IntWithAggregatesFilter<"Solve"> | number
    readTime?: IntWithAggregatesFilter<"Solve"> | number
    thinkTime?: IntWithAggregatesFilter<"Solve"> | number
    codeTime?: IntWithAggregatesFilter<"Solve"> | number
    debugTime?: IntWithAggregatesFilter<"Solve"> | number
    onYourOwn?: BoolWithAggregatesFilter<"Solve"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Solve"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Solve"> | Date | string
  }

  export type UserTrackWhereInput = {
    AND?: UserTrackWhereInput | UserTrackWhereInput[]
    OR?: UserTrackWhereInput[]
    NOT?: UserTrackWhereInput | UserTrackWhereInput[]
    id?: BigIntFilter<"UserTrack"> | bigint | number
    userId?: BigIntFilter<"UserTrack"> | bigint | number
    trackId?: BigIntFilter<"UserTrack"> | bigint | number
    createdAt?: DateTimeFilter<"UserTrack"> | Date | string
    updatedAt?: DateTimeFilter<"UserTrack"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    track?: XOR<TrackScalarRelationFilter, TrackWhereInput>
  }

  export type UserTrackOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    trackId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    track?: TrackOrderByWithRelationInput
  }

  export type UserTrackWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    userId_trackId?: UserTrackUserIdTrackIdCompoundUniqueInput
    AND?: UserTrackWhereInput | UserTrackWhereInput[]
    OR?: UserTrackWhereInput[]
    NOT?: UserTrackWhereInput | UserTrackWhereInput[]
    userId?: BigIntFilter<"UserTrack"> | bigint | number
    trackId?: BigIntFilter<"UserTrack"> | bigint | number
    createdAt?: DateTimeFilter<"UserTrack"> | Date | string
    updatedAt?: DateTimeFilter<"UserTrack"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    track?: XOR<TrackScalarRelationFilter, TrackWhereInput>
  }, "id" | "userId_trackId">

  export type UserTrackOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    trackId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserTrackCountOrderByAggregateInput
    _avg?: UserTrackAvgOrderByAggregateInput
    _max?: UserTrackMaxOrderByAggregateInput
    _min?: UserTrackMinOrderByAggregateInput
    _sum?: UserTrackSumOrderByAggregateInput
  }

  export type UserTrackScalarWhereWithAggregatesInput = {
    AND?: UserTrackScalarWhereWithAggregatesInput | UserTrackScalarWhereWithAggregatesInput[]
    OR?: UserTrackScalarWhereWithAggregatesInput[]
    NOT?: UserTrackScalarWhereWithAggregatesInput | UserTrackScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"UserTrack"> | bigint | number
    userId?: BigIntWithAggregatesFilter<"UserTrack"> | bigint | number
    trackId?: BigIntWithAggregatesFilter<"UserTrack"> | bigint | number
    createdAt?: DateTimeWithAggregatesFilter<"UserTrack"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UserTrack"> | Date | string
  }

  export type ProblemCreateInput = {
    id?: bigint | number
    name?: string
    url?: string
    solves?: SolveCreateNestedManyWithoutProblemInput
  }

  export type ProblemUncheckedCreateInput = {
    id?: bigint | number
    name?: string
    url?: string
    solves?: SolveUncheckedCreateNestedManyWithoutProblemInput
  }

  export type ProblemUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    solves?: SolveUpdateManyWithoutProblemNestedInput
  }

  export type ProblemUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    solves?: SolveUncheckedUpdateManyWithoutProblemNestedInput
  }

  export type ProblemCreateManyInput = {
    id?: bigint | number
    name?: string
    url?: string
  }

  export type ProblemUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type ProblemUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type TrackCreateInput = {
    id?: bigint | number
    name: string
    levels?: TrackLevelCreateNestedManyWithoutTrackInput
    userTrack?: UserTrackCreateNestedManyWithoutTrackInput
  }

  export type TrackUncheckedCreateInput = {
    id?: bigint | number
    name: string
    levels?: TrackLevelUncheckedCreateNestedManyWithoutTrackInput
    userTrack?: UserTrackUncheckedCreateNestedManyWithoutTrackInput
  }

  export type TrackUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    levels?: TrackLevelUpdateManyWithoutTrackNestedInput
    userTrack?: UserTrackUpdateManyWithoutTrackNestedInput
  }

  export type TrackUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    levels?: TrackLevelUncheckedUpdateManyWithoutTrackNestedInput
    userTrack?: UserTrackUncheckedUpdateManyWithoutTrackNestedInput
  }

  export type TrackCreateManyInput = {
    id?: bigint | number
    name: string
  }

  export type TrackUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TrackUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TrackLevelCreateInput = {
    id?: bigint | number
    code: string
    order: number
    track: TrackCreateNestedOneWithoutLevelsInput
    levelModules?: LevelModuleCreateNestedManyWithoutTrackLevelInput
  }

  export type TrackLevelUncheckedCreateInput = {
    id?: bigint | number
    trackId: bigint | number
    code: string
    order: number
    levelModules?: LevelModuleUncheckedCreateNestedManyWithoutTrackLevelInput
  }

  export type TrackLevelUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    code?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    track?: TrackUpdateOneRequiredWithoutLevelsNestedInput
    levelModules?: LevelModuleUpdateManyWithoutTrackLevelNestedInput
  }

  export type TrackLevelUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    trackId?: BigIntFieldUpdateOperationsInput | bigint | number
    code?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    levelModules?: LevelModuleUncheckedUpdateManyWithoutTrackLevelNestedInput
  }

  export type TrackLevelCreateManyInput = {
    id?: bigint | number
    trackId: bigint | number
    code: string
    order: number
  }

  export type TrackLevelUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    code?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
  }

  export type TrackLevelUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    trackId?: BigIntFieldUpdateOperationsInput | bigint | number
    code?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
  }

  export type LevelModuleCreateInput = {
    id?: bigint | number
    order: number
    trackLevel: TrackLevelCreateNestedOneWithoutLevelModulesInput
    module: ModuleCreateNestedOneWithoutLevelModulesInput
  }

  export type LevelModuleUncheckedCreateInput = {
    id?: bigint | number
    trackLevelId: bigint | number
    moduleId: bigint | number
    order: number
  }

  export type LevelModuleUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    order?: IntFieldUpdateOperationsInput | number
    trackLevel?: TrackLevelUpdateOneRequiredWithoutLevelModulesNestedInput
    module?: ModuleUpdateOneRequiredWithoutLevelModulesNestedInput
  }

  export type LevelModuleUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    trackLevelId?: BigIntFieldUpdateOperationsInput | bigint | number
    moduleId?: BigIntFieldUpdateOperationsInput | bigint | number
    order?: IntFieldUpdateOperationsInput | number
  }

  export type LevelModuleCreateManyInput = {
    id?: bigint | number
    trackLevelId: bigint | number
    moduleId: bigint | number
    order: number
  }

  export type LevelModuleUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    order?: IntFieldUpdateOperationsInput | number
  }

  export type LevelModuleUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    trackLevelId?: BigIntFieldUpdateOperationsInput | bigint | number
    moduleId?: BigIntFieldUpdateOperationsInput | bigint | number
    order?: IntFieldUpdateOperationsInput | number
  }

  export type ModuleCreateInput = {
    id?: bigint | number
    name: string
    moduleProblems?: ModuleProblemCreateNestedManyWithoutModuleInput
    levelModules?: LevelModuleCreateNestedManyWithoutModuleInput
  }

  export type ModuleUncheckedCreateInput = {
    id?: bigint | number
    name: string
    moduleProblems?: ModuleProblemUncheckedCreateNestedManyWithoutModuleInput
    levelModules?: LevelModuleUncheckedCreateNestedManyWithoutModuleInput
  }

  export type ModuleUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    moduleProblems?: ModuleProblemUpdateManyWithoutModuleNestedInput
    levelModules?: LevelModuleUpdateManyWithoutModuleNestedInput
  }

  export type ModuleUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    moduleProblems?: ModuleProblemUncheckedUpdateManyWithoutModuleNestedInput
    levelModules?: LevelModuleUncheckedUpdateManyWithoutModuleNestedInput
  }

  export type ModuleCreateManyInput = {
    id?: bigint | number
    name: string
  }

  export type ModuleUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ModuleUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ModuleProblemCreateInput = {
    id?: bigint | number
    problemId: bigint | number
    type: $Enums.ProblemType
    difficulty: $Enums.ProblemDifficulty
    module: ModuleCreateNestedOneWithoutModuleProblemsInput
  }

  export type ModuleProblemUncheckedCreateInput = {
    id?: bigint | number
    moduleId: bigint | number
    problemId: bigint | number
    type: $Enums.ProblemType
    difficulty: $Enums.ProblemDifficulty
  }

  export type ModuleProblemUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    problemId?: BigIntFieldUpdateOperationsInput | bigint | number
    type?: EnumProblemTypeFieldUpdateOperationsInput | $Enums.ProblemType
    difficulty?: EnumProblemDifficultyFieldUpdateOperationsInput | $Enums.ProblemDifficulty
    module?: ModuleUpdateOneRequiredWithoutModuleProblemsNestedInput
  }

  export type ModuleProblemUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    moduleId?: BigIntFieldUpdateOperationsInput | bigint | number
    problemId?: BigIntFieldUpdateOperationsInput | bigint | number
    type?: EnumProblemTypeFieldUpdateOperationsInput | $Enums.ProblemType
    difficulty?: EnumProblemDifficultyFieldUpdateOperationsInput | $Enums.ProblemDifficulty
  }

  export type ModuleProblemCreateManyInput = {
    id?: bigint | number
    moduleId: bigint | number
    problemId: bigint | number
    type: $Enums.ProblemType
    difficulty: $Enums.ProblemDifficulty
  }

  export type ModuleProblemUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    problemId?: BigIntFieldUpdateOperationsInput | bigint | number
    type?: EnumProblemTypeFieldUpdateOperationsInput | $Enums.ProblemType
    difficulty?: EnumProblemDifficultyFieldUpdateOperationsInput | $Enums.ProblemDifficulty
  }

  export type ModuleProblemUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    moduleId?: BigIntFieldUpdateOperationsInput | bigint | number
    problemId?: BigIntFieldUpdateOperationsInput | bigint | number
    type?: EnumProblemTypeFieldUpdateOperationsInput | $Enums.ProblemType
    difficulty?: EnumProblemDifficultyFieldUpdateOperationsInput | $Enums.ProblemDifficulty
  }

  export type UserCreateInput = {
    id?: bigint | number
    name: string
    solves?: SolveCreateNestedManyWithoutUserInput
    userTracks?: UserTrackCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: bigint | number
    name: string
    solves?: SolveUncheckedCreateNestedManyWithoutUserInput
    userTracks?: UserTrackUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    solves?: SolveUpdateManyWithoutUserNestedInput
    userTracks?: UserTrackUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    solves?: SolveUncheckedUpdateManyWithoutUserNestedInput
    userTracks?: UserTrackUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: bigint | number
    name: string
  }

  export type UserUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type SolveCreateInput = {
    id?: bigint | number
    submitCount: number
    readTime: number
    thinkTime: number
    codeTime: number
    debugTime: number
    onYourOwn: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutSolvesInput
    problem: ProblemCreateNestedOneWithoutSolvesInput
  }

  export type SolveUncheckedCreateInput = {
    id?: bigint | number
    userId: bigint | number
    problemId: bigint | number
    submitCount: number
    readTime: number
    thinkTime: number
    codeTime: number
    debugTime: number
    onYourOwn: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SolveUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    submitCount?: IntFieldUpdateOperationsInput | number
    readTime?: IntFieldUpdateOperationsInput | number
    thinkTime?: IntFieldUpdateOperationsInput | number
    codeTime?: IntFieldUpdateOperationsInput | number
    debugTime?: IntFieldUpdateOperationsInput | number
    onYourOwn?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSolvesNestedInput
    problem?: ProblemUpdateOneRequiredWithoutSolvesNestedInput
  }

  export type SolveUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    userId?: BigIntFieldUpdateOperationsInput | bigint | number
    problemId?: BigIntFieldUpdateOperationsInput | bigint | number
    submitCount?: IntFieldUpdateOperationsInput | number
    readTime?: IntFieldUpdateOperationsInput | number
    thinkTime?: IntFieldUpdateOperationsInput | number
    codeTime?: IntFieldUpdateOperationsInput | number
    debugTime?: IntFieldUpdateOperationsInput | number
    onYourOwn?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SolveCreateManyInput = {
    id?: bigint | number
    userId: bigint | number
    problemId: bigint | number
    submitCount: number
    readTime: number
    thinkTime: number
    codeTime: number
    debugTime: number
    onYourOwn: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SolveUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    submitCount?: IntFieldUpdateOperationsInput | number
    readTime?: IntFieldUpdateOperationsInput | number
    thinkTime?: IntFieldUpdateOperationsInput | number
    codeTime?: IntFieldUpdateOperationsInput | number
    debugTime?: IntFieldUpdateOperationsInput | number
    onYourOwn?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SolveUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    userId?: BigIntFieldUpdateOperationsInput | bigint | number
    problemId?: BigIntFieldUpdateOperationsInput | bigint | number
    submitCount?: IntFieldUpdateOperationsInput | number
    readTime?: IntFieldUpdateOperationsInput | number
    thinkTime?: IntFieldUpdateOperationsInput | number
    codeTime?: IntFieldUpdateOperationsInput | number
    debugTime?: IntFieldUpdateOperationsInput | number
    onYourOwn?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserTrackCreateInput = {
    id?: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutUserTracksInput
    track: TrackCreateNestedOneWithoutUserTrackInput
  }

  export type UserTrackUncheckedCreateInput = {
    id?: bigint | number
    userId: bigint | number
    trackId: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserTrackUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUserTracksNestedInput
    track?: TrackUpdateOneRequiredWithoutUserTrackNestedInput
  }

  export type UserTrackUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    userId?: BigIntFieldUpdateOperationsInput | bigint | number
    trackId?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserTrackCreateManyInput = {
    id?: bigint | number
    userId: bigint | number
    trackId: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserTrackUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserTrackUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    userId?: BigIntFieldUpdateOperationsInput | bigint | number
    trackId?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type SolveListRelationFilter = {
    every?: SolveWhereInput
    some?: SolveWhereInput
    none?: SolveWhereInput
  }

  export type SolveOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProblemCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrder
  }

  export type ProblemAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ProblemMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrder
  }

  export type ProblemMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrder
  }

  export type ProblemSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type TrackLevelListRelationFilter = {
    every?: TrackLevelWhereInput
    some?: TrackLevelWhereInput
    none?: TrackLevelWhereInput
  }

  export type UserTrackListRelationFilter = {
    every?: UserTrackWhereInput
    some?: UserTrackWhereInput
    none?: UserTrackWhereInput
  }

  export type TrackLevelOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserTrackOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TrackCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type TrackAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TrackMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type TrackMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type TrackSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type TrackScalarRelationFilter = {
    is?: TrackWhereInput
    isNot?: TrackWhereInput
  }

  export type LevelModuleListRelationFilter = {
    every?: LevelModuleWhereInput
    some?: LevelModuleWhereInput
    none?: LevelModuleWhereInput
  }

  export type LevelModuleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TrackLevelTrackIdCodeCompoundUniqueInput = {
    trackId: bigint | number
    code: string
  }

  export type TrackLevelCountOrderByAggregateInput = {
    id?: SortOrder
    trackId?: SortOrder
    code?: SortOrder
    order?: SortOrder
  }

  export type TrackLevelAvgOrderByAggregateInput = {
    id?: SortOrder
    trackId?: SortOrder
    order?: SortOrder
  }

  export type TrackLevelMaxOrderByAggregateInput = {
    id?: SortOrder
    trackId?: SortOrder
    code?: SortOrder
    order?: SortOrder
  }

  export type TrackLevelMinOrderByAggregateInput = {
    id?: SortOrder
    trackId?: SortOrder
    code?: SortOrder
    order?: SortOrder
  }

  export type TrackLevelSumOrderByAggregateInput = {
    id?: SortOrder
    trackId?: SortOrder
    order?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type TrackLevelScalarRelationFilter = {
    is?: TrackLevelWhereInput
    isNot?: TrackLevelWhereInput
  }

  export type ModuleScalarRelationFilter = {
    is?: ModuleWhereInput
    isNot?: ModuleWhereInput
  }

  export type LevelModuleTrackLevelIdModuleIdCompoundUniqueInput = {
    trackLevelId: bigint | number
    moduleId: bigint | number
  }

  export type LevelModuleCountOrderByAggregateInput = {
    id?: SortOrder
    trackLevelId?: SortOrder
    moduleId?: SortOrder
    order?: SortOrder
  }

  export type LevelModuleAvgOrderByAggregateInput = {
    id?: SortOrder
    trackLevelId?: SortOrder
    moduleId?: SortOrder
    order?: SortOrder
  }

  export type LevelModuleMaxOrderByAggregateInput = {
    id?: SortOrder
    trackLevelId?: SortOrder
    moduleId?: SortOrder
    order?: SortOrder
  }

  export type LevelModuleMinOrderByAggregateInput = {
    id?: SortOrder
    trackLevelId?: SortOrder
    moduleId?: SortOrder
    order?: SortOrder
  }

  export type LevelModuleSumOrderByAggregateInput = {
    id?: SortOrder
    trackLevelId?: SortOrder
    moduleId?: SortOrder
    order?: SortOrder
  }

  export type ModuleProblemListRelationFilter = {
    every?: ModuleProblemWhereInput
    some?: ModuleProblemWhereInput
    none?: ModuleProblemWhereInput
  }

  export type ModuleProblemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ModuleCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type ModuleAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ModuleMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type ModuleMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type ModuleSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumProblemTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ProblemType | EnumProblemTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ProblemType[] | ListEnumProblemTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProblemType[] | ListEnumProblemTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumProblemTypeFilter<$PrismaModel> | $Enums.ProblemType
  }

  export type EnumProblemDifficultyFilter<$PrismaModel = never> = {
    equals?: $Enums.ProblemDifficulty | EnumProblemDifficultyFieldRefInput<$PrismaModel>
    in?: $Enums.ProblemDifficulty[] | ListEnumProblemDifficultyFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProblemDifficulty[] | ListEnumProblemDifficultyFieldRefInput<$PrismaModel>
    not?: NestedEnumProblemDifficultyFilter<$PrismaModel> | $Enums.ProblemDifficulty
  }

  export type ModuleProblemModuleIdProblemIdCompoundUniqueInput = {
    moduleId: bigint | number
    problemId: bigint | number
  }

  export type ModuleProblemCountOrderByAggregateInput = {
    id?: SortOrder
    moduleId?: SortOrder
    problemId?: SortOrder
    type?: SortOrder
    difficulty?: SortOrder
  }

  export type ModuleProblemAvgOrderByAggregateInput = {
    id?: SortOrder
    moduleId?: SortOrder
    problemId?: SortOrder
  }

  export type ModuleProblemMaxOrderByAggregateInput = {
    id?: SortOrder
    moduleId?: SortOrder
    problemId?: SortOrder
    type?: SortOrder
    difficulty?: SortOrder
  }

  export type ModuleProblemMinOrderByAggregateInput = {
    id?: SortOrder
    moduleId?: SortOrder
    problemId?: SortOrder
    type?: SortOrder
    difficulty?: SortOrder
  }

  export type ModuleProblemSumOrderByAggregateInput = {
    id?: SortOrder
    moduleId?: SortOrder
    problemId?: SortOrder
  }

  export type EnumProblemTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProblemType | EnumProblemTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ProblemType[] | ListEnumProblemTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProblemType[] | ListEnumProblemTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumProblemTypeWithAggregatesFilter<$PrismaModel> | $Enums.ProblemType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProblemTypeFilter<$PrismaModel>
    _max?: NestedEnumProblemTypeFilter<$PrismaModel>
  }

  export type EnumProblemDifficultyWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProblemDifficulty | EnumProblemDifficultyFieldRefInput<$PrismaModel>
    in?: $Enums.ProblemDifficulty[] | ListEnumProblemDifficultyFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProblemDifficulty[] | ListEnumProblemDifficultyFieldRefInput<$PrismaModel>
    not?: NestedEnumProblemDifficultyWithAggregatesFilter<$PrismaModel> | $Enums.ProblemDifficulty
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProblemDifficultyFilter<$PrismaModel>
    _max?: NestedEnumProblemDifficultyFilter<$PrismaModel>
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ProblemScalarRelationFilter = {
    is?: ProblemWhereInput
    isNot?: ProblemWhereInput
  }

  export type SolveUserIdProblemIdCompoundUniqueInput = {
    userId: bigint | number
    problemId: bigint | number
  }

  export type SolveCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    problemId?: SortOrder
    submitCount?: SortOrder
    readTime?: SortOrder
    thinkTime?: SortOrder
    codeTime?: SortOrder
    debugTime?: SortOrder
    onYourOwn?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SolveAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    problemId?: SortOrder
    submitCount?: SortOrder
    readTime?: SortOrder
    thinkTime?: SortOrder
    codeTime?: SortOrder
    debugTime?: SortOrder
  }

  export type SolveMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    problemId?: SortOrder
    submitCount?: SortOrder
    readTime?: SortOrder
    thinkTime?: SortOrder
    codeTime?: SortOrder
    debugTime?: SortOrder
    onYourOwn?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SolveMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    problemId?: SortOrder
    submitCount?: SortOrder
    readTime?: SortOrder
    thinkTime?: SortOrder
    codeTime?: SortOrder
    debugTime?: SortOrder
    onYourOwn?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SolveSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    problemId?: SortOrder
    submitCount?: SortOrder
    readTime?: SortOrder
    thinkTime?: SortOrder
    codeTime?: SortOrder
    debugTime?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserTrackUserIdTrackIdCompoundUniqueInput = {
    userId: bigint | number
    trackId: bigint | number
  }

  export type UserTrackCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    trackId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserTrackAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    trackId?: SortOrder
  }

  export type UserTrackMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    trackId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserTrackMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    trackId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserTrackSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    trackId?: SortOrder
  }

  export type SolveCreateNestedManyWithoutProblemInput = {
    create?: XOR<SolveCreateWithoutProblemInput, SolveUncheckedCreateWithoutProblemInput> | SolveCreateWithoutProblemInput[] | SolveUncheckedCreateWithoutProblemInput[]
    connectOrCreate?: SolveCreateOrConnectWithoutProblemInput | SolveCreateOrConnectWithoutProblemInput[]
    createMany?: SolveCreateManyProblemInputEnvelope
    connect?: SolveWhereUniqueInput | SolveWhereUniqueInput[]
  }

  export type SolveUncheckedCreateNestedManyWithoutProblemInput = {
    create?: XOR<SolveCreateWithoutProblemInput, SolveUncheckedCreateWithoutProblemInput> | SolveCreateWithoutProblemInput[] | SolveUncheckedCreateWithoutProblemInput[]
    connectOrCreate?: SolveCreateOrConnectWithoutProblemInput | SolveCreateOrConnectWithoutProblemInput[]
    createMany?: SolveCreateManyProblemInputEnvelope
    connect?: SolveWhereUniqueInput | SolveWhereUniqueInput[]
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type SolveUpdateManyWithoutProblemNestedInput = {
    create?: XOR<SolveCreateWithoutProblemInput, SolveUncheckedCreateWithoutProblemInput> | SolveCreateWithoutProblemInput[] | SolveUncheckedCreateWithoutProblemInput[]
    connectOrCreate?: SolveCreateOrConnectWithoutProblemInput | SolveCreateOrConnectWithoutProblemInput[]
    upsert?: SolveUpsertWithWhereUniqueWithoutProblemInput | SolveUpsertWithWhereUniqueWithoutProblemInput[]
    createMany?: SolveCreateManyProblemInputEnvelope
    set?: SolveWhereUniqueInput | SolveWhereUniqueInput[]
    disconnect?: SolveWhereUniqueInput | SolveWhereUniqueInput[]
    delete?: SolveWhereUniqueInput | SolveWhereUniqueInput[]
    connect?: SolveWhereUniqueInput | SolveWhereUniqueInput[]
    update?: SolveUpdateWithWhereUniqueWithoutProblemInput | SolveUpdateWithWhereUniqueWithoutProblemInput[]
    updateMany?: SolveUpdateManyWithWhereWithoutProblemInput | SolveUpdateManyWithWhereWithoutProblemInput[]
    deleteMany?: SolveScalarWhereInput | SolveScalarWhereInput[]
  }

  export type SolveUncheckedUpdateManyWithoutProblemNestedInput = {
    create?: XOR<SolveCreateWithoutProblemInput, SolveUncheckedCreateWithoutProblemInput> | SolveCreateWithoutProblemInput[] | SolveUncheckedCreateWithoutProblemInput[]
    connectOrCreate?: SolveCreateOrConnectWithoutProblemInput | SolveCreateOrConnectWithoutProblemInput[]
    upsert?: SolveUpsertWithWhereUniqueWithoutProblemInput | SolveUpsertWithWhereUniqueWithoutProblemInput[]
    createMany?: SolveCreateManyProblemInputEnvelope
    set?: SolveWhereUniqueInput | SolveWhereUniqueInput[]
    disconnect?: SolveWhereUniqueInput | SolveWhereUniqueInput[]
    delete?: SolveWhereUniqueInput | SolveWhereUniqueInput[]
    connect?: SolveWhereUniqueInput | SolveWhereUniqueInput[]
    update?: SolveUpdateWithWhereUniqueWithoutProblemInput | SolveUpdateWithWhereUniqueWithoutProblemInput[]
    updateMany?: SolveUpdateManyWithWhereWithoutProblemInput | SolveUpdateManyWithWhereWithoutProblemInput[]
    deleteMany?: SolveScalarWhereInput | SolveScalarWhereInput[]
  }

  export type TrackLevelCreateNestedManyWithoutTrackInput = {
    create?: XOR<TrackLevelCreateWithoutTrackInput, TrackLevelUncheckedCreateWithoutTrackInput> | TrackLevelCreateWithoutTrackInput[] | TrackLevelUncheckedCreateWithoutTrackInput[]
    connectOrCreate?: TrackLevelCreateOrConnectWithoutTrackInput | TrackLevelCreateOrConnectWithoutTrackInput[]
    createMany?: TrackLevelCreateManyTrackInputEnvelope
    connect?: TrackLevelWhereUniqueInput | TrackLevelWhereUniqueInput[]
  }

  export type UserTrackCreateNestedManyWithoutTrackInput = {
    create?: XOR<UserTrackCreateWithoutTrackInput, UserTrackUncheckedCreateWithoutTrackInput> | UserTrackCreateWithoutTrackInput[] | UserTrackUncheckedCreateWithoutTrackInput[]
    connectOrCreate?: UserTrackCreateOrConnectWithoutTrackInput | UserTrackCreateOrConnectWithoutTrackInput[]
    createMany?: UserTrackCreateManyTrackInputEnvelope
    connect?: UserTrackWhereUniqueInput | UserTrackWhereUniqueInput[]
  }

  export type TrackLevelUncheckedCreateNestedManyWithoutTrackInput = {
    create?: XOR<TrackLevelCreateWithoutTrackInput, TrackLevelUncheckedCreateWithoutTrackInput> | TrackLevelCreateWithoutTrackInput[] | TrackLevelUncheckedCreateWithoutTrackInput[]
    connectOrCreate?: TrackLevelCreateOrConnectWithoutTrackInput | TrackLevelCreateOrConnectWithoutTrackInput[]
    createMany?: TrackLevelCreateManyTrackInputEnvelope
    connect?: TrackLevelWhereUniqueInput | TrackLevelWhereUniqueInput[]
  }

  export type UserTrackUncheckedCreateNestedManyWithoutTrackInput = {
    create?: XOR<UserTrackCreateWithoutTrackInput, UserTrackUncheckedCreateWithoutTrackInput> | UserTrackCreateWithoutTrackInput[] | UserTrackUncheckedCreateWithoutTrackInput[]
    connectOrCreate?: UserTrackCreateOrConnectWithoutTrackInput | UserTrackCreateOrConnectWithoutTrackInput[]
    createMany?: UserTrackCreateManyTrackInputEnvelope
    connect?: UserTrackWhereUniqueInput | UserTrackWhereUniqueInput[]
  }

  export type TrackLevelUpdateManyWithoutTrackNestedInput = {
    create?: XOR<TrackLevelCreateWithoutTrackInput, TrackLevelUncheckedCreateWithoutTrackInput> | TrackLevelCreateWithoutTrackInput[] | TrackLevelUncheckedCreateWithoutTrackInput[]
    connectOrCreate?: TrackLevelCreateOrConnectWithoutTrackInput | TrackLevelCreateOrConnectWithoutTrackInput[]
    upsert?: TrackLevelUpsertWithWhereUniqueWithoutTrackInput | TrackLevelUpsertWithWhereUniqueWithoutTrackInput[]
    createMany?: TrackLevelCreateManyTrackInputEnvelope
    set?: TrackLevelWhereUniqueInput | TrackLevelWhereUniqueInput[]
    disconnect?: TrackLevelWhereUniqueInput | TrackLevelWhereUniqueInput[]
    delete?: TrackLevelWhereUniqueInput | TrackLevelWhereUniqueInput[]
    connect?: TrackLevelWhereUniqueInput | TrackLevelWhereUniqueInput[]
    update?: TrackLevelUpdateWithWhereUniqueWithoutTrackInput | TrackLevelUpdateWithWhereUniqueWithoutTrackInput[]
    updateMany?: TrackLevelUpdateManyWithWhereWithoutTrackInput | TrackLevelUpdateManyWithWhereWithoutTrackInput[]
    deleteMany?: TrackLevelScalarWhereInput | TrackLevelScalarWhereInput[]
  }

  export type UserTrackUpdateManyWithoutTrackNestedInput = {
    create?: XOR<UserTrackCreateWithoutTrackInput, UserTrackUncheckedCreateWithoutTrackInput> | UserTrackCreateWithoutTrackInput[] | UserTrackUncheckedCreateWithoutTrackInput[]
    connectOrCreate?: UserTrackCreateOrConnectWithoutTrackInput | UserTrackCreateOrConnectWithoutTrackInput[]
    upsert?: UserTrackUpsertWithWhereUniqueWithoutTrackInput | UserTrackUpsertWithWhereUniqueWithoutTrackInput[]
    createMany?: UserTrackCreateManyTrackInputEnvelope
    set?: UserTrackWhereUniqueInput | UserTrackWhereUniqueInput[]
    disconnect?: UserTrackWhereUniqueInput | UserTrackWhereUniqueInput[]
    delete?: UserTrackWhereUniqueInput | UserTrackWhereUniqueInput[]
    connect?: UserTrackWhereUniqueInput | UserTrackWhereUniqueInput[]
    update?: UserTrackUpdateWithWhereUniqueWithoutTrackInput | UserTrackUpdateWithWhereUniqueWithoutTrackInput[]
    updateMany?: UserTrackUpdateManyWithWhereWithoutTrackInput | UserTrackUpdateManyWithWhereWithoutTrackInput[]
    deleteMany?: UserTrackScalarWhereInput | UserTrackScalarWhereInput[]
  }

  export type TrackLevelUncheckedUpdateManyWithoutTrackNestedInput = {
    create?: XOR<TrackLevelCreateWithoutTrackInput, TrackLevelUncheckedCreateWithoutTrackInput> | TrackLevelCreateWithoutTrackInput[] | TrackLevelUncheckedCreateWithoutTrackInput[]
    connectOrCreate?: TrackLevelCreateOrConnectWithoutTrackInput | TrackLevelCreateOrConnectWithoutTrackInput[]
    upsert?: TrackLevelUpsertWithWhereUniqueWithoutTrackInput | TrackLevelUpsertWithWhereUniqueWithoutTrackInput[]
    createMany?: TrackLevelCreateManyTrackInputEnvelope
    set?: TrackLevelWhereUniqueInput | TrackLevelWhereUniqueInput[]
    disconnect?: TrackLevelWhereUniqueInput | TrackLevelWhereUniqueInput[]
    delete?: TrackLevelWhereUniqueInput | TrackLevelWhereUniqueInput[]
    connect?: TrackLevelWhereUniqueInput | TrackLevelWhereUniqueInput[]
    update?: TrackLevelUpdateWithWhereUniqueWithoutTrackInput | TrackLevelUpdateWithWhereUniqueWithoutTrackInput[]
    updateMany?: TrackLevelUpdateManyWithWhereWithoutTrackInput | TrackLevelUpdateManyWithWhereWithoutTrackInput[]
    deleteMany?: TrackLevelScalarWhereInput | TrackLevelScalarWhereInput[]
  }

  export type UserTrackUncheckedUpdateManyWithoutTrackNestedInput = {
    create?: XOR<UserTrackCreateWithoutTrackInput, UserTrackUncheckedCreateWithoutTrackInput> | UserTrackCreateWithoutTrackInput[] | UserTrackUncheckedCreateWithoutTrackInput[]
    connectOrCreate?: UserTrackCreateOrConnectWithoutTrackInput | UserTrackCreateOrConnectWithoutTrackInput[]
    upsert?: UserTrackUpsertWithWhereUniqueWithoutTrackInput | UserTrackUpsertWithWhereUniqueWithoutTrackInput[]
    createMany?: UserTrackCreateManyTrackInputEnvelope
    set?: UserTrackWhereUniqueInput | UserTrackWhereUniqueInput[]
    disconnect?: UserTrackWhereUniqueInput | UserTrackWhereUniqueInput[]
    delete?: UserTrackWhereUniqueInput | UserTrackWhereUniqueInput[]
    connect?: UserTrackWhereUniqueInput | UserTrackWhereUniqueInput[]
    update?: UserTrackUpdateWithWhereUniqueWithoutTrackInput | UserTrackUpdateWithWhereUniqueWithoutTrackInput[]
    updateMany?: UserTrackUpdateManyWithWhereWithoutTrackInput | UserTrackUpdateManyWithWhereWithoutTrackInput[]
    deleteMany?: UserTrackScalarWhereInput | UserTrackScalarWhereInput[]
  }

  export type TrackCreateNestedOneWithoutLevelsInput = {
    create?: XOR<TrackCreateWithoutLevelsInput, TrackUncheckedCreateWithoutLevelsInput>
    connectOrCreate?: TrackCreateOrConnectWithoutLevelsInput
    connect?: TrackWhereUniqueInput
  }

  export type LevelModuleCreateNestedManyWithoutTrackLevelInput = {
    create?: XOR<LevelModuleCreateWithoutTrackLevelInput, LevelModuleUncheckedCreateWithoutTrackLevelInput> | LevelModuleCreateWithoutTrackLevelInput[] | LevelModuleUncheckedCreateWithoutTrackLevelInput[]
    connectOrCreate?: LevelModuleCreateOrConnectWithoutTrackLevelInput | LevelModuleCreateOrConnectWithoutTrackLevelInput[]
    createMany?: LevelModuleCreateManyTrackLevelInputEnvelope
    connect?: LevelModuleWhereUniqueInput | LevelModuleWhereUniqueInput[]
  }

  export type LevelModuleUncheckedCreateNestedManyWithoutTrackLevelInput = {
    create?: XOR<LevelModuleCreateWithoutTrackLevelInput, LevelModuleUncheckedCreateWithoutTrackLevelInput> | LevelModuleCreateWithoutTrackLevelInput[] | LevelModuleUncheckedCreateWithoutTrackLevelInput[]
    connectOrCreate?: LevelModuleCreateOrConnectWithoutTrackLevelInput | LevelModuleCreateOrConnectWithoutTrackLevelInput[]
    createMany?: LevelModuleCreateManyTrackLevelInputEnvelope
    connect?: LevelModuleWhereUniqueInput | LevelModuleWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TrackUpdateOneRequiredWithoutLevelsNestedInput = {
    create?: XOR<TrackCreateWithoutLevelsInput, TrackUncheckedCreateWithoutLevelsInput>
    connectOrCreate?: TrackCreateOrConnectWithoutLevelsInput
    upsert?: TrackUpsertWithoutLevelsInput
    connect?: TrackWhereUniqueInput
    update?: XOR<XOR<TrackUpdateToOneWithWhereWithoutLevelsInput, TrackUpdateWithoutLevelsInput>, TrackUncheckedUpdateWithoutLevelsInput>
  }

  export type LevelModuleUpdateManyWithoutTrackLevelNestedInput = {
    create?: XOR<LevelModuleCreateWithoutTrackLevelInput, LevelModuleUncheckedCreateWithoutTrackLevelInput> | LevelModuleCreateWithoutTrackLevelInput[] | LevelModuleUncheckedCreateWithoutTrackLevelInput[]
    connectOrCreate?: LevelModuleCreateOrConnectWithoutTrackLevelInput | LevelModuleCreateOrConnectWithoutTrackLevelInput[]
    upsert?: LevelModuleUpsertWithWhereUniqueWithoutTrackLevelInput | LevelModuleUpsertWithWhereUniqueWithoutTrackLevelInput[]
    createMany?: LevelModuleCreateManyTrackLevelInputEnvelope
    set?: LevelModuleWhereUniqueInput | LevelModuleWhereUniqueInput[]
    disconnect?: LevelModuleWhereUniqueInput | LevelModuleWhereUniqueInput[]
    delete?: LevelModuleWhereUniqueInput | LevelModuleWhereUniqueInput[]
    connect?: LevelModuleWhereUniqueInput | LevelModuleWhereUniqueInput[]
    update?: LevelModuleUpdateWithWhereUniqueWithoutTrackLevelInput | LevelModuleUpdateWithWhereUniqueWithoutTrackLevelInput[]
    updateMany?: LevelModuleUpdateManyWithWhereWithoutTrackLevelInput | LevelModuleUpdateManyWithWhereWithoutTrackLevelInput[]
    deleteMany?: LevelModuleScalarWhereInput | LevelModuleScalarWhereInput[]
  }

  export type LevelModuleUncheckedUpdateManyWithoutTrackLevelNestedInput = {
    create?: XOR<LevelModuleCreateWithoutTrackLevelInput, LevelModuleUncheckedCreateWithoutTrackLevelInput> | LevelModuleCreateWithoutTrackLevelInput[] | LevelModuleUncheckedCreateWithoutTrackLevelInput[]
    connectOrCreate?: LevelModuleCreateOrConnectWithoutTrackLevelInput | LevelModuleCreateOrConnectWithoutTrackLevelInput[]
    upsert?: LevelModuleUpsertWithWhereUniqueWithoutTrackLevelInput | LevelModuleUpsertWithWhereUniqueWithoutTrackLevelInput[]
    createMany?: LevelModuleCreateManyTrackLevelInputEnvelope
    set?: LevelModuleWhereUniqueInput | LevelModuleWhereUniqueInput[]
    disconnect?: LevelModuleWhereUniqueInput | LevelModuleWhereUniqueInput[]
    delete?: LevelModuleWhereUniqueInput | LevelModuleWhereUniqueInput[]
    connect?: LevelModuleWhereUniqueInput | LevelModuleWhereUniqueInput[]
    update?: LevelModuleUpdateWithWhereUniqueWithoutTrackLevelInput | LevelModuleUpdateWithWhereUniqueWithoutTrackLevelInput[]
    updateMany?: LevelModuleUpdateManyWithWhereWithoutTrackLevelInput | LevelModuleUpdateManyWithWhereWithoutTrackLevelInput[]
    deleteMany?: LevelModuleScalarWhereInput | LevelModuleScalarWhereInput[]
  }

  export type TrackLevelCreateNestedOneWithoutLevelModulesInput = {
    create?: XOR<TrackLevelCreateWithoutLevelModulesInput, TrackLevelUncheckedCreateWithoutLevelModulesInput>
    connectOrCreate?: TrackLevelCreateOrConnectWithoutLevelModulesInput
    connect?: TrackLevelWhereUniqueInput
  }

  export type ModuleCreateNestedOneWithoutLevelModulesInput = {
    create?: XOR<ModuleCreateWithoutLevelModulesInput, ModuleUncheckedCreateWithoutLevelModulesInput>
    connectOrCreate?: ModuleCreateOrConnectWithoutLevelModulesInput
    connect?: ModuleWhereUniqueInput
  }

  export type TrackLevelUpdateOneRequiredWithoutLevelModulesNestedInput = {
    create?: XOR<TrackLevelCreateWithoutLevelModulesInput, TrackLevelUncheckedCreateWithoutLevelModulesInput>
    connectOrCreate?: TrackLevelCreateOrConnectWithoutLevelModulesInput
    upsert?: TrackLevelUpsertWithoutLevelModulesInput
    connect?: TrackLevelWhereUniqueInput
    update?: XOR<XOR<TrackLevelUpdateToOneWithWhereWithoutLevelModulesInput, TrackLevelUpdateWithoutLevelModulesInput>, TrackLevelUncheckedUpdateWithoutLevelModulesInput>
  }

  export type ModuleUpdateOneRequiredWithoutLevelModulesNestedInput = {
    create?: XOR<ModuleCreateWithoutLevelModulesInput, ModuleUncheckedCreateWithoutLevelModulesInput>
    connectOrCreate?: ModuleCreateOrConnectWithoutLevelModulesInput
    upsert?: ModuleUpsertWithoutLevelModulesInput
    connect?: ModuleWhereUniqueInput
    update?: XOR<XOR<ModuleUpdateToOneWithWhereWithoutLevelModulesInput, ModuleUpdateWithoutLevelModulesInput>, ModuleUncheckedUpdateWithoutLevelModulesInput>
  }

  export type ModuleProblemCreateNestedManyWithoutModuleInput = {
    create?: XOR<ModuleProblemCreateWithoutModuleInput, ModuleProblemUncheckedCreateWithoutModuleInput> | ModuleProblemCreateWithoutModuleInput[] | ModuleProblemUncheckedCreateWithoutModuleInput[]
    connectOrCreate?: ModuleProblemCreateOrConnectWithoutModuleInput | ModuleProblemCreateOrConnectWithoutModuleInput[]
    createMany?: ModuleProblemCreateManyModuleInputEnvelope
    connect?: ModuleProblemWhereUniqueInput | ModuleProblemWhereUniqueInput[]
  }

  export type LevelModuleCreateNestedManyWithoutModuleInput = {
    create?: XOR<LevelModuleCreateWithoutModuleInput, LevelModuleUncheckedCreateWithoutModuleInput> | LevelModuleCreateWithoutModuleInput[] | LevelModuleUncheckedCreateWithoutModuleInput[]
    connectOrCreate?: LevelModuleCreateOrConnectWithoutModuleInput | LevelModuleCreateOrConnectWithoutModuleInput[]
    createMany?: LevelModuleCreateManyModuleInputEnvelope
    connect?: LevelModuleWhereUniqueInput | LevelModuleWhereUniqueInput[]
  }

  export type ModuleProblemUncheckedCreateNestedManyWithoutModuleInput = {
    create?: XOR<ModuleProblemCreateWithoutModuleInput, ModuleProblemUncheckedCreateWithoutModuleInput> | ModuleProblemCreateWithoutModuleInput[] | ModuleProblemUncheckedCreateWithoutModuleInput[]
    connectOrCreate?: ModuleProblemCreateOrConnectWithoutModuleInput | ModuleProblemCreateOrConnectWithoutModuleInput[]
    createMany?: ModuleProblemCreateManyModuleInputEnvelope
    connect?: ModuleProblemWhereUniqueInput | ModuleProblemWhereUniqueInput[]
  }

  export type LevelModuleUncheckedCreateNestedManyWithoutModuleInput = {
    create?: XOR<LevelModuleCreateWithoutModuleInput, LevelModuleUncheckedCreateWithoutModuleInput> | LevelModuleCreateWithoutModuleInput[] | LevelModuleUncheckedCreateWithoutModuleInput[]
    connectOrCreate?: LevelModuleCreateOrConnectWithoutModuleInput | LevelModuleCreateOrConnectWithoutModuleInput[]
    createMany?: LevelModuleCreateManyModuleInputEnvelope
    connect?: LevelModuleWhereUniqueInput | LevelModuleWhereUniqueInput[]
  }

  export type ModuleProblemUpdateManyWithoutModuleNestedInput = {
    create?: XOR<ModuleProblemCreateWithoutModuleInput, ModuleProblemUncheckedCreateWithoutModuleInput> | ModuleProblemCreateWithoutModuleInput[] | ModuleProblemUncheckedCreateWithoutModuleInput[]
    connectOrCreate?: ModuleProblemCreateOrConnectWithoutModuleInput | ModuleProblemCreateOrConnectWithoutModuleInput[]
    upsert?: ModuleProblemUpsertWithWhereUniqueWithoutModuleInput | ModuleProblemUpsertWithWhereUniqueWithoutModuleInput[]
    createMany?: ModuleProblemCreateManyModuleInputEnvelope
    set?: ModuleProblemWhereUniqueInput | ModuleProblemWhereUniqueInput[]
    disconnect?: ModuleProblemWhereUniqueInput | ModuleProblemWhereUniqueInput[]
    delete?: ModuleProblemWhereUniqueInput | ModuleProblemWhereUniqueInput[]
    connect?: ModuleProblemWhereUniqueInput | ModuleProblemWhereUniqueInput[]
    update?: ModuleProblemUpdateWithWhereUniqueWithoutModuleInput | ModuleProblemUpdateWithWhereUniqueWithoutModuleInput[]
    updateMany?: ModuleProblemUpdateManyWithWhereWithoutModuleInput | ModuleProblemUpdateManyWithWhereWithoutModuleInput[]
    deleteMany?: ModuleProblemScalarWhereInput | ModuleProblemScalarWhereInput[]
  }

  export type LevelModuleUpdateManyWithoutModuleNestedInput = {
    create?: XOR<LevelModuleCreateWithoutModuleInput, LevelModuleUncheckedCreateWithoutModuleInput> | LevelModuleCreateWithoutModuleInput[] | LevelModuleUncheckedCreateWithoutModuleInput[]
    connectOrCreate?: LevelModuleCreateOrConnectWithoutModuleInput | LevelModuleCreateOrConnectWithoutModuleInput[]
    upsert?: LevelModuleUpsertWithWhereUniqueWithoutModuleInput | LevelModuleUpsertWithWhereUniqueWithoutModuleInput[]
    createMany?: LevelModuleCreateManyModuleInputEnvelope
    set?: LevelModuleWhereUniqueInput | LevelModuleWhereUniqueInput[]
    disconnect?: LevelModuleWhereUniqueInput | LevelModuleWhereUniqueInput[]
    delete?: LevelModuleWhereUniqueInput | LevelModuleWhereUniqueInput[]
    connect?: LevelModuleWhereUniqueInput | LevelModuleWhereUniqueInput[]
    update?: LevelModuleUpdateWithWhereUniqueWithoutModuleInput | LevelModuleUpdateWithWhereUniqueWithoutModuleInput[]
    updateMany?: LevelModuleUpdateManyWithWhereWithoutModuleInput | LevelModuleUpdateManyWithWhereWithoutModuleInput[]
    deleteMany?: LevelModuleScalarWhereInput | LevelModuleScalarWhereInput[]
  }

  export type ModuleProblemUncheckedUpdateManyWithoutModuleNestedInput = {
    create?: XOR<ModuleProblemCreateWithoutModuleInput, ModuleProblemUncheckedCreateWithoutModuleInput> | ModuleProblemCreateWithoutModuleInput[] | ModuleProblemUncheckedCreateWithoutModuleInput[]
    connectOrCreate?: ModuleProblemCreateOrConnectWithoutModuleInput | ModuleProblemCreateOrConnectWithoutModuleInput[]
    upsert?: ModuleProblemUpsertWithWhereUniqueWithoutModuleInput | ModuleProblemUpsertWithWhereUniqueWithoutModuleInput[]
    createMany?: ModuleProblemCreateManyModuleInputEnvelope
    set?: ModuleProblemWhereUniqueInput | ModuleProblemWhereUniqueInput[]
    disconnect?: ModuleProblemWhereUniqueInput | ModuleProblemWhereUniqueInput[]
    delete?: ModuleProblemWhereUniqueInput | ModuleProblemWhereUniqueInput[]
    connect?: ModuleProblemWhereUniqueInput | ModuleProblemWhereUniqueInput[]
    update?: ModuleProblemUpdateWithWhereUniqueWithoutModuleInput | ModuleProblemUpdateWithWhereUniqueWithoutModuleInput[]
    updateMany?: ModuleProblemUpdateManyWithWhereWithoutModuleInput | ModuleProblemUpdateManyWithWhereWithoutModuleInput[]
    deleteMany?: ModuleProblemScalarWhereInput | ModuleProblemScalarWhereInput[]
  }

  export type LevelModuleUncheckedUpdateManyWithoutModuleNestedInput = {
    create?: XOR<LevelModuleCreateWithoutModuleInput, LevelModuleUncheckedCreateWithoutModuleInput> | LevelModuleCreateWithoutModuleInput[] | LevelModuleUncheckedCreateWithoutModuleInput[]
    connectOrCreate?: LevelModuleCreateOrConnectWithoutModuleInput | LevelModuleCreateOrConnectWithoutModuleInput[]
    upsert?: LevelModuleUpsertWithWhereUniqueWithoutModuleInput | LevelModuleUpsertWithWhereUniqueWithoutModuleInput[]
    createMany?: LevelModuleCreateManyModuleInputEnvelope
    set?: LevelModuleWhereUniqueInput | LevelModuleWhereUniqueInput[]
    disconnect?: LevelModuleWhereUniqueInput | LevelModuleWhereUniqueInput[]
    delete?: LevelModuleWhereUniqueInput | LevelModuleWhereUniqueInput[]
    connect?: LevelModuleWhereUniqueInput | LevelModuleWhereUniqueInput[]
    update?: LevelModuleUpdateWithWhereUniqueWithoutModuleInput | LevelModuleUpdateWithWhereUniqueWithoutModuleInput[]
    updateMany?: LevelModuleUpdateManyWithWhereWithoutModuleInput | LevelModuleUpdateManyWithWhereWithoutModuleInput[]
    deleteMany?: LevelModuleScalarWhereInput | LevelModuleScalarWhereInput[]
  }

  export type ModuleCreateNestedOneWithoutModuleProblemsInput = {
    create?: XOR<ModuleCreateWithoutModuleProblemsInput, ModuleUncheckedCreateWithoutModuleProblemsInput>
    connectOrCreate?: ModuleCreateOrConnectWithoutModuleProblemsInput
    connect?: ModuleWhereUniqueInput
  }

  export type EnumProblemTypeFieldUpdateOperationsInput = {
    set?: $Enums.ProblemType
  }

  export type EnumProblemDifficultyFieldUpdateOperationsInput = {
    set?: $Enums.ProblemDifficulty
  }

  export type ModuleUpdateOneRequiredWithoutModuleProblemsNestedInput = {
    create?: XOR<ModuleCreateWithoutModuleProblemsInput, ModuleUncheckedCreateWithoutModuleProblemsInput>
    connectOrCreate?: ModuleCreateOrConnectWithoutModuleProblemsInput
    upsert?: ModuleUpsertWithoutModuleProblemsInput
    connect?: ModuleWhereUniqueInput
    update?: XOR<XOR<ModuleUpdateToOneWithWhereWithoutModuleProblemsInput, ModuleUpdateWithoutModuleProblemsInput>, ModuleUncheckedUpdateWithoutModuleProblemsInput>
  }

  export type SolveCreateNestedManyWithoutUserInput = {
    create?: XOR<SolveCreateWithoutUserInput, SolveUncheckedCreateWithoutUserInput> | SolveCreateWithoutUserInput[] | SolveUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SolveCreateOrConnectWithoutUserInput | SolveCreateOrConnectWithoutUserInput[]
    createMany?: SolveCreateManyUserInputEnvelope
    connect?: SolveWhereUniqueInput | SolveWhereUniqueInput[]
  }

  export type UserTrackCreateNestedManyWithoutUserInput = {
    create?: XOR<UserTrackCreateWithoutUserInput, UserTrackUncheckedCreateWithoutUserInput> | UserTrackCreateWithoutUserInput[] | UserTrackUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserTrackCreateOrConnectWithoutUserInput | UserTrackCreateOrConnectWithoutUserInput[]
    createMany?: UserTrackCreateManyUserInputEnvelope
    connect?: UserTrackWhereUniqueInput | UserTrackWhereUniqueInput[]
  }

  export type SolveUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SolveCreateWithoutUserInput, SolveUncheckedCreateWithoutUserInput> | SolveCreateWithoutUserInput[] | SolveUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SolveCreateOrConnectWithoutUserInput | SolveCreateOrConnectWithoutUserInput[]
    createMany?: SolveCreateManyUserInputEnvelope
    connect?: SolveWhereUniqueInput | SolveWhereUniqueInput[]
  }

  export type UserTrackUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserTrackCreateWithoutUserInput, UserTrackUncheckedCreateWithoutUserInput> | UserTrackCreateWithoutUserInput[] | UserTrackUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserTrackCreateOrConnectWithoutUserInput | UserTrackCreateOrConnectWithoutUserInput[]
    createMany?: UserTrackCreateManyUserInputEnvelope
    connect?: UserTrackWhereUniqueInput | UserTrackWhereUniqueInput[]
  }

  export type SolveUpdateManyWithoutUserNestedInput = {
    create?: XOR<SolveCreateWithoutUserInput, SolveUncheckedCreateWithoutUserInput> | SolveCreateWithoutUserInput[] | SolveUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SolveCreateOrConnectWithoutUserInput | SolveCreateOrConnectWithoutUserInput[]
    upsert?: SolveUpsertWithWhereUniqueWithoutUserInput | SolveUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SolveCreateManyUserInputEnvelope
    set?: SolveWhereUniqueInput | SolveWhereUniqueInput[]
    disconnect?: SolveWhereUniqueInput | SolveWhereUniqueInput[]
    delete?: SolveWhereUniqueInput | SolveWhereUniqueInput[]
    connect?: SolveWhereUniqueInput | SolveWhereUniqueInput[]
    update?: SolveUpdateWithWhereUniqueWithoutUserInput | SolveUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SolveUpdateManyWithWhereWithoutUserInput | SolveUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SolveScalarWhereInput | SolveScalarWhereInput[]
  }

  export type UserTrackUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserTrackCreateWithoutUserInput, UserTrackUncheckedCreateWithoutUserInput> | UserTrackCreateWithoutUserInput[] | UserTrackUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserTrackCreateOrConnectWithoutUserInput | UserTrackCreateOrConnectWithoutUserInput[]
    upsert?: UserTrackUpsertWithWhereUniqueWithoutUserInput | UserTrackUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserTrackCreateManyUserInputEnvelope
    set?: UserTrackWhereUniqueInput | UserTrackWhereUniqueInput[]
    disconnect?: UserTrackWhereUniqueInput | UserTrackWhereUniqueInput[]
    delete?: UserTrackWhereUniqueInput | UserTrackWhereUniqueInput[]
    connect?: UserTrackWhereUniqueInput | UserTrackWhereUniqueInput[]
    update?: UserTrackUpdateWithWhereUniqueWithoutUserInput | UserTrackUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserTrackUpdateManyWithWhereWithoutUserInput | UserTrackUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserTrackScalarWhereInput | UserTrackScalarWhereInput[]
  }

  export type SolveUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SolveCreateWithoutUserInput, SolveUncheckedCreateWithoutUserInput> | SolveCreateWithoutUserInput[] | SolveUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SolveCreateOrConnectWithoutUserInput | SolveCreateOrConnectWithoutUserInput[]
    upsert?: SolveUpsertWithWhereUniqueWithoutUserInput | SolveUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SolveCreateManyUserInputEnvelope
    set?: SolveWhereUniqueInput | SolveWhereUniqueInput[]
    disconnect?: SolveWhereUniqueInput | SolveWhereUniqueInput[]
    delete?: SolveWhereUniqueInput | SolveWhereUniqueInput[]
    connect?: SolveWhereUniqueInput | SolveWhereUniqueInput[]
    update?: SolveUpdateWithWhereUniqueWithoutUserInput | SolveUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SolveUpdateManyWithWhereWithoutUserInput | SolveUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SolveScalarWhereInput | SolveScalarWhereInput[]
  }

  export type UserTrackUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserTrackCreateWithoutUserInput, UserTrackUncheckedCreateWithoutUserInput> | UserTrackCreateWithoutUserInput[] | UserTrackUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserTrackCreateOrConnectWithoutUserInput | UserTrackCreateOrConnectWithoutUserInput[]
    upsert?: UserTrackUpsertWithWhereUniqueWithoutUserInput | UserTrackUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserTrackCreateManyUserInputEnvelope
    set?: UserTrackWhereUniqueInput | UserTrackWhereUniqueInput[]
    disconnect?: UserTrackWhereUniqueInput | UserTrackWhereUniqueInput[]
    delete?: UserTrackWhereUniqueInput | UserTrackWhereUniqueInput[]
    connect?: UserTrackWhereUniqueInput | UserTrackWhereUniqueInput[]
    update?: UserTrackUpdateWithWhereUniqueWithoutUserInput | UserTrackUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserTrackUpdateManyWithWhereWithoutUserInput | UserTrackUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserTrackScalarWhereInput | UserTrackScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutSolvesInput = {
    create?: XOR<UserCreateWithoutSolvesInput, UserUncheckedCreateWithoutSolvesInput>
    connectOrCreate?: UserCreateOrConnectWithoutSolvesInput
    connect?: UserWhereUniqueInput
  }

  export type ProblemCreateNestedOneWithoutSolvesInput = {
    create?: XOR<ProblemCreateWithoutSolvesInput, ProblemUncheckedCreateWithoutSolvesInput>
    connectOrCreate?: ProblemCreateOrConnectWithoutSolvesInput
    connect?: ProblemWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateOneRequiredWithoutSolvesNestedInput = {
    create?: XOR<UserCreateWithoutSolvesInput, UserUncheckedCreateWithoutSolvesInput>
    connectOrCreate?: UserCreateOrConnectWithoutSolvesInput
    upsert?: UserUpsertWithoutSolvesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSolvesInput, UserUpdateWithoutSolvesInput>, UserUncheckedUpdateWithoutSolvesInput>
  }

  export type ProblemUpdateOneRequiredWithoutSolvesNestedInput = {
    create?: XOR<ProblemCreateWithoutSolvesInput, ProblemUncheckedCreateWithoutSolvesInput>
    connectOrCreate?: ProblemCreateOrConnectWithoutSolvesInput
    upsert?: ProblemUpsertWithoutSolvesInput
    connect?: ProblemWhereUniqueInput
    update?: XOR<XOR<ProblemUpdateToOneWithWhereWithoutSolvesInput, ProblemUpdateWithoutSolvesInput>, ProblemUncheckedUpdateWithoutSolvesInput>
  }

  export type UserCreateNestedOneWithoutUserTracksInput = {
    create?: XOR<UserCreateWithoutUserTracksInput, UserUncheckedCreateWithoutUserTracksInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserTracksInput
    connect?: UserWhereUniqueInput
  }

  export type TrackCreateNestedOneWithoutUserTrackInput = {
    create?: XOR<TrackCreateWithoutUserTrackInput, TrackUncheckedCreateWithoutUserTrackInput>
    connectOrCreate?: TrackCreateOrConnectWithoutUserTrackInput
    connect?: TrackWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutUserTracksNestedInput = {
    create?: XOR<UserCreateWithoutUserTracksInput, UserUncheckedCreateWithoutUserTracksInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserTracksInput
    upsert?: UserUpsertWithoutUserTracksInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserTracksInput, UserUpdateWithoutUserTracksInput>, UserUncheckedUpdateWithoutUserTracksInput>
  }

  export type TrackUpdateOneRequiredWithoutUserTrackNestedInput = {
    create?: XOR<TrackCreateWithoutUserTrackInput, TrackUncheckedCreateWithoutUserTrackInput>
    connectOrCreate?: TrackCreateOrConnectWithoutUserTrackInput
    upsert?: TrackUpsertWithoutUserTrackInput
    connect?: TrackWhereUniqueInput
    update?: XOR<XOR<TrackUpdateToOneWithWhereWithoutUserTrackInput, TrackUpdateWithoutUserTrackInput>, TrackUncheckedUpdateWithoutUserTrackInput>
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedEnumProblemTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ProblemType | EnumProblemTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ProblemType[] | ListEnumProblemTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProblemType[] | ListEnumProblemTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumProblemTypeFilter<$PrismaModel> | $Enums.ProblemType
  }

  export type NestedEnumProblemDifficultyFilter<$PrismaModel = never> = {
    equals?: $Enums.ProblemDifficulty | EnumProblemDifficultyFieldRefInput<$PrismaModel>
    in?: $Enums.ProblemDifficulty[] | ListEnumProblemDifficultyFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProblemDifficulty[] | ListEnumProblemDifficultyFieldRefInput<$PrismaModel>
    not?: NestedEnumProblemDifficultyFilter<$PrismaModel> | $Enums.ProblemDifficulty
  }

  export type NestedEnumProblemTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProblemType | EnumProblemTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ProblemType[] | ListEnumProblemTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProblemType[] | ListEnumProblemTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumProblemTypeWithAggregatesFilter<$PrismaModel> | $Enums.ProblemType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProblemTypeFilter<$PrismaModel>
    _max?: NestedEnumProblemTypeFilter<$PrismaModel>
  }

  export type NestedEnumProblemDifficultyWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProblemDifficulty | EnumProblemDifficultyFieldRefInput<$PrismaModel>
    in?: $Enums.ProblemDifficulty[] | ListEnumProblemDifficultyFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProblemDifficulty[] | ListEnumProblemDifficultyFieldRefInput<$PrismaModel>
    not?: NestedEnumProblemDifficultyWithAggregatesFilter<$PrismaModel> | $Enums.ProblemDifficulty
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProblemDifficultyFilter<$PrismaModel>
    _max?: NestedEnumProblemDifficultyFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type SolveCreateWithoutProblemInput = {
    id?: bigint | number
    submitCount: number
    readTime: number
    thinkTime: number
    codeTime: number
    debugTime: number
    onYourOwn: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutSolvesInput
  }

  export type SolveUncheckedCreateWithoutProblemInput = {
    id?: bigint | number
    userId: bigint | number
    submitCount: number
    readTime: number
    thinkTime: number
    codeTime: number
    debugTime: number
    onYourOwn: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SolveCreateOrConnectWithoutProblemInput = {
    where: SolveWhereUniqueInput
    create: XOR<SolveCreateWithoutProblemInput, SolveUncheckedCreateWithoutProblemInput>
  }

  export type SolveCreateManyProblemInputEnvelope = {
    data: SolveCreateManyProblemInput | SolveCreateManyProblemInput[]
    skipDuplicates?: boolean
  }

  export type SolveUpsertWithWhereUniqueWithoutProblemInput = {
    where: SolveWhereUniqueInput
    update: XOR<SolveUpdateWithoutProblemInput, SolveUncheckedUpdateWithoutProblemInput>
    create: XOR<SolveCreateWithoutProblemInput, SolveUncheckedCreateWithoutProblemInput>
  }

  export type SolveUpdateWithWhereUniqueWithoutProblemInput = {
    where: SolveWhereUniqueInput
    data: XOR<SolveUpdateWithoutProblemInput, SolveUncheckedUpdateWithoutProblemInput>
  }

  export type SolveUpdateManyWithWhereWithoutProblemInput = {
    where: SolveScalarWhereInput
    data: XOR<SolveUpdateManyMutationInput, SolveUncheckedUpdateManyWithoutProblemInput>
  }

  export type SolveScalarWhereInput = {
    AND?: SolveScalarWhereInput | SolveScalarWhereInput[]
    OR?: SolveScalarWhereInput[]
    NOT?: SolveScalarWhereInput | SolveScalarWhereInput[]
    id?: BigIntFilter<"Solve"> | bigint | number
    userId?: BigIntFilter<"Solve"> | bigint | number
    problemId?: BigIntFilter<"Solve"> | bigint | number
    submitCount?: IntFilter<"Solve"> | number
    readTime?: IntFilter<"Solve"> | number
    thinkTime?: IntFilter<"Solve"> | number
    codeTime?: IntFilter<"Solve"> | number
    debugTime?: IntFilter<"Solve"> | number
    onYourOwn?: BoolFilter<"Solve"> | boolean
    createdAt?: DateTimeFilter<"Solve"> | Date | string
    updatedAt?: DateTimeFilter<"Solve"> | Date | string
  }

  export type TrackLevelCreateWithoutTrackInput = {
    id?: bigint | number
    code: string
    order: number
    levelModules?: LevelModuleCreateNestedManyWithoutTrackLevelInput
  }

  export type TrackLevelUncheckedCreateWithoutTrackInput = {
    id?: bigint | number
    code: string
    order: number
    levelModules?: LevelModuleUncheckedCreateNestedManyWithoutTrackLevelInput
  }

  export type TrackLevelCreateOrConnectWithoutTrackInput = {
    where: TrackLevelWhereUniqueInput
    create: XOR<TrackLevelCreateWithoutTrackInput, TrackLevelUncheckedCreateWithoutTrackInput>
  }

  export type TrackLevelCreateManyTrackInputEnvelope = {
    data: TrackLevelCreateManyTrackInput | TrackLevelCreateManyTrackInput[]
    skipDuplicates?: boolean
  }

  export type UserTrackCreateWithoutTrackInput = {
    id?: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutUserTracksInput
  }

  export type UserTrackUncheckedCreateWithoutTrackInput = {
    id?: bigint | number
    userId: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserTrackCreateOrConnectWithoutTrackInput = {
    where: UserTrackWhereUniqueInput
    create: XOR<UserTrackCreateWithoutTrackInput, UserTrackUncheckedCreateWithoutTrackInput>
  }

  export type UserTrackCreateManyTrackInputEnvelope = {
    data: UserTrackCreateManyTrackInput | UserTrackCreateManyTrackInput[]
    skipDuplicates?: boolean
  }

  export type TrackLevelUpsertWithWhereUniqueWithoutTrackInput = {
    where: TrackLevelWhereUniqueInput
    update: XOR<TrackLevelUpdateWithoutTrackInput, TrackLevelUncheckedUpdateWithoutTrackInput>
    create: XOR<TrackLevelCreateWithoutTrackInput, TrackLevelUncheckedCreateWithoutTrackInput>
  }

  export type TrackLevelUpdateWithWhereUniqueWithoutTrackInput = {
    where: TrackLevelWhereUniqueInput
    data: XOR<TrackLevelUpdateWithoutTrackInput, TrackLevelUncheckedUpdateWithoutTrackInput>
  }

  export type TrackLevelUpdateManyWithWhereWithoutTrackInput = {
    where: TrackLevelScalarWhereInput
    data: XOR<TrackLevelUpdateManyMutationInput, TrackLevelUncheckedUpdateManyWithoutTrackInput>
  }

  export type TrackLevelScalarWhereInput = {
    AND?: TrackLevelScalarWhereInput | TrackLevelScalarWhereInput[]
    OR?: TrackLevelScalarWhereInput[]
    NOT?: TrackLevelScalarWhereInput | TrackLevelScalarWhereInput[]
    id?: BigIntFilter<"TrackLevel"> | bigint | number
    trackId?: BigIntFilter<"TrackLevel"> | bigint | number
    code?: StringFilter<"TrackLevel"> | string
    order?: IntFilter<"TrackLevel"> | number
  }

  export type UserTrackUpsertWithWhereUniqueWithoutTrackInput = {
    where: UserTrackWhereUniqueInput
    update: XOR<UserTrackUpdateWithoutTrackInput, UserTrackUncheckedUpdateWithoutTrackInput>
    create: XOR<UserTrackCreateWithoutTrackInput, UserTrackUncheckedCreateWithoutTrackInput>
  }

  export type UserTrackUpdateWithWhereUniqueWithoutTrackInput = {
    where: UserTrackWhereUniqueInput
    data: XOR<UserTrackUpdateWithoutTrackInput, UserTrackUncheckedUpdateWithoutTrackInput>
  }

  export type UserTrackUpdateManyWithWhereWithoutTrackInput = {
    where: UserTrackScalarWhereInput
    data: XOR<UserTrackUpdateManyMutationInput, UserTrackUncheckedUpdateManyWithoutTrackInput>
  }

  export type UserTrackScalarWhereInput = {
    AND?: UserTrackScalarWhereInput | UserTrackScalarWhereInput[]
    OR?: UserTrackScalarWhereInput[]
    NOT?: UserTrackScalarWhereInput | UserTrackScalarWhereInput[]
    id?: BigIntFilter<"UserTrack"> | bigint | number
    userId?: BigIntFilter<"UserTrack"> | bigint | number
    trackId?: BigIntFilter<"UserTrack"> | bigint | number
    createdAt?: DateTimeFilter<"UserTrack"> | Date | string
    updatedAt?: DateTimeFilter<"UserTrack"> | Date | string
  }

  export type TrackCreateWithoutLevelsInput = {
    id?: bigint | number
    name: string
    userTrack?: UserTrackCreateNestedManyWithoutTrackInput
  }

  export type TrackUncheckedCreateWithoutLevelsInput = {
    id?: bigint | number
    name: string
    userTrack?: UserTrackUncheckedCreateNestedManyWithoutTrackInput
  }

  export type TrackCreateOrConnectWithoutLevelsInput = {
    where: TrackWhereUniqueInput
    create: XOR<TrackCreateWithoutLevelsInput, TrackUncheckedCreateWithoutLevelsInput>
  }

  export type LevelModuleCreateWithoutTrackLevelInput = {
    id?: bigint | number
    order: number
    module: ModuleCreateNestedOneWithoutLevelModulesInput
  }

  export type LevelModuleUncheckedCreateWithoutTrackLevelInput = {
    id?: bigint | number
    moduleId: bigint | number
    order: number
  }

  export type LevelModuleCreateOrConnectWithoutTrackLevelInput = {
    where: LevelModuleWhereUniqueInput
    create: XOR<LevelModuleCreateWithoutTrackLevelInput, LevelModuleUncheckedCreateWithoutTrackLevelInput>
  }

  export type LevelModuleCreateManyTrackLevelInputEnvelope = {
    data: LevelModuleCreateManyTrackLevelInput | LevelModuleCreateManyTrackLevelInput[]
    skipDuplicates?: boolean
  }

  export type TrackUpsertWithoutLevelsInput = {
    update: XOR<TrackUpdateWithoutLevelsInput, TrackUncheckedUpdateWithoutLevelsInput>
    create: XOR<TrackCreateWithoutLevelsInput, TrackUncheckedCreateWithoutLevelsInput>
    where?: TrackWhereInput
  }

  export type TrackUpdateToOneWithWhereWithoutLevelsInput = {
    where?: TrackWhereInput
    data: XOR<TrackUpdateWithoutLevelsInput, TrackUncheckedUpdateWithoutLevelsInput>
  }

  export type TrackUpdateWithoutLevelsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    userTrack?: UserTrackUpdateManyWithoutTrackNestedInput
  }

  export type TrackUncheckedUpdateWithoutLevelsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    userTrack?: UserTrackUncheckedUpdateManyWithoutTrackNestedInput
  }

  export type LevelModuleUpsertWithWhereUniqueWithoutTrackLevelInput = {
    where: LevelModuleWhereUniqueInput
    update: XOR<LevelModuleUpdateWithoutTrackLevelInput, LevelModuleUncheckedUpdateWithoutTrackLevelInput>
    create: XOR<LevelModuleCreateWithoutTrackLevelInput, LevelModuleUncheckedCreateWithoutTrackLevelInput>
  }

  export type LevelModuleUpdateWithWhereUniqueWithoutTrackLevelInput = {
    where: LevelModuleWhereUniqueInput
    data: XOR<LevelModuleUpdateWithoutTrackLevelInput, LevelModuleUncheckedUpdateWithoutTrackLevelInput>
  }

  export type LevelModuleUpdateManyWithWhereWithoutTrackLevelInput = {
    where: LevelModuleScalarWhereInput
    data: XOR<LevelModuleUpdateManyMutationInput, LevelModuleUncheckedUpdateManyWithoutTrackLevelInput>
  }

  export type LevelModuleScalarWhereInput = {
    AND?: LevelModuleScalarWhereInput | LevelModuleScalarWhereInput[]
    OR?: LevelModuleScalarWhereInput[]
    NOT?: LevelModuleScalarWhereInput | LevelModuleScalarWhereInput[]
    id?: BigIntFilter<"LevelModule"> | bigint | number
    trackLevelId?: BigIntFilter<"LevelModule"> | bigint | number
    moduleId?: BigIntFilter<"LevelModule"> | bigint | number
    order?: IntFilter<"LevelModule"> | number
  }

  export type TrackLevelCreateWithoutLevelModulesInput = {
    id?: bigint | number
    code: string
    order: number
    track: TrackCreateNestedOneWithoutLevelsInput
  }

  export type TrackLevelUncheckedCreateWithoutLevelModulesInput = {
    id?: bigint | number
    trackId: bigint | number
    code: string
    order: number
  }

  export type TrackLevelCreateOrConnectWithoutLevelModulesInput = {
    where: TrackLevelWhereUniqueInput
    create: XOR<TrackLevelCreateWithoutLevelModulesInput, TrackLevelUncheckedCreateWithoutLevelModulesInput>
  }

  export type ModuleCreateWithoutLevelModulesInput = {
    id?: bigint | number
    name: string
    moduleProblems?: ModuleProblemCreateNestedManyWithoutModuleInput
  }

  export type ModuleUncheckedCreateWithoutLevelModulesInput = {
    id?: bigint | number
    name: string
    moduleProblems?: ModuleProblemUncheckedCreateNestedManyWithoutModuleInput
  }

  export type ModuleCreateOrConnectWithoutLevelModulesInput = {
    where: ModuleWhereUniqueInput
    create: XOR<ModuleCreateWithoutLevelModulesInput, ModuleUncheckedCreateWithoutLevelModulesInput>
  }

  export type TrackLevelUpsertWithoutLevelModulesInput = {
    update: XOR<TrackLevelUpdateWithoutLevelModulesInput, TrackLevelUncheckedUpdateWithoutLevelModulesInput>
    create: XOR<TrackLevelCreateWithoutLevelModulesInput, TrackLevelUncheckedCreateWithoutLevelModulesInput>
    where?: TrackLevelWhereInput
  }

  export type TrackLevelUpdateToOneWithWhereWithoutLevelModulesInput = {
    where?: TrackLevelWhereInput
    data: XOR<TrackLevelUpdateWithoutLevelModulesInput, TrackLevelUncheckedUpdateWithoutLevelModulesInput>
  }

  export type TrackLevelUpdateWithoutLevelModulesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    code?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    track?: TrackUpdateOneRequiredWithoutLevelsNestedInput
  }

  export type TrackLevelUncheckedUpdateWithoutLevelModulesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    trackId?: BigIntFieldUpdateOperationsInput | bigint | number
    code?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
  }

  export type ModuleUpsertWithoutLevelModulesInput = {
    update: XOR<ModuleUpdateWithoutLevelModulesInput, ModuleUncheckedUpdateWithoutLevelModulesInput>
    create: XOR<ModuleCreateWithoutLevelModulesInput, ModuleUncheckedCreateWithoutLevelModulesInput>
    where?: ModuleWhereInput
  }

  export type ModuleUpdateToOneWithWhereWithoutLevelModulesInput = {
    where?: ModuleWhereInput
    data: XOR<ModuleUpdateWithoutLevelModulesInput, ModuleUncheckedUpdateWithoutLevelModulesInput>
  }

  export type ModuleUpdateWithoutLevelModulesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    moduleProblems?: ModuleProblemUpdateManyWithoutModuleNestedInput
  }

  export type ModuleUncheckedUpdateWithoutLevelModulesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    moduleProblems?: ModuleProblemUncheckedUpdateManyWithoutModuleNestedInput
  }

  export type ModuleProblemCreateWithoutModuleInput = {
    id?: bigint | number
    problemId: bigint | number
    type: $Enums.ProblemType
    difficulty: $Enums.ProblemDifficulty
  }

  export type ModuleProblemUncheckedCreateWithoutModuleInput = {
    id?: bigint | number
    problemId: bigint | number
    type: $Enums.ProblemType
    difficulty: $Enums.ProblemDifficulty
  }

  export type ModuleProblemCreateOrConnectWithoutModuleInput = {
    where: ModuleProblemWhereUniqueInput
    create: XOR<ModuleProblemCreateWithoutModuleInput, ModuleProblemUncheckedCreateWithoutModuleInput>
  }

  export type ModuleProblemCreateManyModuleInputEnvelope = {
    data: ModuleProblemCreateManyModuleInput | ModuleProblemCreateManyModuleInput[]
    skipDuplicates?: boolean
  }

  export type LevelModuleCreateWithoutModuleInput = {
    id?: bigint | number
    order: number
    trackLevel: TrackLevelCreateNestedOneWithoutLevelModulesInput
  }

  export type LevelModuleUncheckedCreateWithoutModuleInput = {
    id?: bigint | number
    trackLevelId: bigint | number
    order: number
  }

  export type LevelModuleCreateOrConnectWithoutModuleInput = {
    where: LevelModuleWhereUniqueInput
    create: XOR<LevelModuleCreateWithoutModuleInput, LevelModuleUncheckedCreateWithoutModuleInput>
  }

  export type LevelModuleCreateManyModuleInputEnvelope = {
    data: LevelModuleCreateManyModuleInput | LevelModuleCreateManyModuleInput[]
    skipDuplicates?: boolean
  }

  export type ModuleProblemUpsertWithWhereUniqueWithoutModuleInput = {
    where: ModuleProblemWhereUniqueInput
    update: XOR<ModuleProblemUpdateWithoutModuleInput, ModuleProblemUncheckedUpdateWithoutModuleInput>
    create: XOR<ModuleProblemCreateWithoutModuleInput, ModuleProblemUncheckedCreateWithoutModuleInput>
  }

  export type ModuleProblemUpdateWithWhereUniqueWithoutModuleInput = {
    where: ModuleProblemWhereUniqueInput
    data: XOR<ModuleProblemUpdateWithoutModuleInput, ModuleProblemUncheckedUpdateWithoutModuleInput>
  }

  export type ModuleProblemUpdateManyWithWhereWithoutModuleInput = {
    where: ModuleProblemScalarWhereInput
    data: XOR<ModuleProblemUpdateManyMutationInput, ModuleProblemUncheckedUpdateManyWithoutModuleInput>
  }

  export type ModuleProblemScalarWhereInput = {
    AND?: ModuleProblemScalarWhereInput | ModuleProblemScalarWhereInput[]
    OR?: ModuleProblemScalarWhereInput[]
    NOT?: ModuleProblemScalarWhereInput | ModuleProblemScalarWhereInput[]
    id?: BigIntFilter<"ModuleProblem"> | bigint | number
    moduleId?: BigIntFilter<"ModuleProblem"> | bigint | number
    problemId?: BigIntFilter<"ModuleProblem"> | bigint | number
    type?: EnumProblemTypeFilter<"ModuleProblem"> | $Enums.ProblemType
    difficulty?: EnumProblemDifficultyFilter<"ModuleProblem"> | $Enums.ProblemDifficulty
  }

  export type LevelModuleUpsertWithWhereUniqueWithoutModuleInput = {
    where: LevelModuleWhereUniqueInput
    update: XOR<LevelModuleUpdateWithoutModuleInput, LevelModuleUncheckedUpdateWithoutModuleInput>
    create: XOR<LevelModuleCreateWithoutModuleInput, LevelModuleUncheckedCreateWithoutModuleInput>
  }

  export type LevelModuleUpdateWithWhereUniqueWithoutModuleInput = {
    where: LevelModuleWhereUniqueInput
    data: XOR<LevelModuleUpdateWithoutModuleInput, LevelModuleUncheckedUpdateWithoutModuleInput>
  }

  export type LevelModuleUpdateManyWithWhereWithoutModuleInput = {
    where: LevelModuleScalarWhereInput
    data: XOR<LevelModuleUpdateManyMutationInput, LevelModuleUncheckedUpdateManyWithoutModuleInput>
  }

  export type ModuleCreateWithoutModuleProblemsInput = {
    id?: bigint | number
    name: string
    levelModules?: LevelModuleCreateNestedManyWithoutModuleInput
  }

  export type ModuleUncheckedCreateWithoutModuleProblemsInput = {
    id?: bigint | number
    name: string
    levelModules?: LevelModuleUncheckedCreateNestedManyWithoutModuleInput
  }

  export type ModuleCreateOrConnectWithoutModuleProblemsInput = {
    where: ModuleWhereUniqueInput
    create: XOR<ModuleCreateWithoutModuleProblemsInput, ModuleUncheckedCreateWithoutModuleProblemsInput>
  }

  export type ModuleUpsertWithoutModuleProblemsInput = {
    update: XOR<ModuleUpdateWithoutModuleProblemsInput, ModuleUncheckedUpdateWithoutModuleProblemsInput>
    create: XOR<ModuleCreateWithoutModuleProblemsInput, ModuleUncheckedCreateWithoutModuleProblemsInput>
    where?: ModuleWhereInput
  }

  export type ModuleUpdateToOneWithWhereWithoutModuleProblemsInput = {
    where?: ModuleWhereInput
    data: XOR<ModuleUpdateWithoutModuleProblemsInput, ModuleUncheckedUpdateWithoutModuleProblemsInput>
  }

  export type ModuleUpdateWithoutModuleProblemsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    levelModules?: LevelModuleUpdateManyWithoutModuleNestedInput
  }

  export type ModuleUncheckedUpdateWithoutModuleProblemsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    levelModules?: LevelModuleUncheckedUpdateManyWithoutModuleNestedInput
  }

  export type SolveCreateWithoutUserInput = {
    id?: bigint | number
    submitCount: number
    readTime: number
    thinkTime: number
    codeTime: number
    debugTime: number
    onYourOwn: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    problem: ProblemCreateNestedOneWithoutSolvesInput
  }

  export type SolveUncheckedCreateWithoutUserInput = {
    id?: bigint | number
    problemId: bigint | number
    submitCount: number
    readTime: number
    thinkTime: number
    codeTime: number
    debugTime: number
    onYourOwn: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SolveCreateOrConnectWithoutUserInput = {
    where: SolveWhereUniqueInput
    create: XOR<SolveCreateWithoutUserInput, SolveUncheckedCreateWithoutUserInput>
  }

  export type SolveCreateManyUserInputEnvelope = {
    data: SolveCreateManyUserInput | SolveCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserTrackCreateWithoutUserInput = {
    id?: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
    track: TrackCreateNestedOneWithoutUserTrackInput
  }

  export type UserTrackUncheckedCreateWithoutUserInput = {
    id?: bigint | number
    trackId: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserTrackCreateOrConnectWithoutUserInput = {
    where: UserTrackWhereUniqueInput
    create: XOR<UserTrackCreateWithoutUserInput, UserTrackUncheckedCreateWithoutUserInput>
  }

  export type UserTrackCreateManyUserInputEnvelope = {
    data: UserTrackCreateManyUserInput | UserTrackCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SolveUpsertWithWhereUniqueWithoutUserInput = {
    where: SolveWhereUniqueInput
    update: XOR<SolveUpdateWithoutUserInput, SolveUncheckedUpdateWithoutUserInput>
    create: XOR<SolveCreateWithoutUserInput, SolveUncheckedCreateWithoutUserInput>
  }

  export type SolveUpdateWithWhereUniqueWithoutUserInput = {
    where: SolveWhereUniqueInput
    data: XOR<SolveUpdateWithoutUserInput, SolveUncheckedUpdateWithoutUserInput>
  }

  export type SolveUpdateManyWithWhereWithoutUserInput = {
    where: SolveScalarWhereInput
    data: XOR<SolveUpdateManyMutationInput, SolveUncheckedUpdateManyWithoutUserInput>
  }

  export type UserTrackUpsertWithWhereUniqueWithoutUserInput = {
    where: UserTrackWhereUniqueInput
    update: XOR<UserTrackUpdateWithoutUserInput, UserTrackUncheckedUpdateWithoutUserInput>
    create: XOR<UserTrackCreateWithoutUserInput, UserTrackUncheckedCreateWithoutUserInput>
  }

  export type UserTrackUpdateWithWhereUniqueWithoutUserInput = {
    where: UserTrackWhereUniqueInput
    data: XOR<UserTrackUpdateWithoutUserInput, UserTrackUncheckedUpdateWithoutUserInput>
  }

  export type UserTrackUpdateManyWithWhereWithoutUserInput = {
    where: UserTrackScalarWhereInput
    data: XOR<UserTrackUpdateManyMutationInput, UserTrackUncheckedUpdateManyWithoutUserInput>
  }

  export type UserCreateWithoutSolvesInput = {
    id?: bigint | number
    name: string
    userTracks?: UserTrackCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSolvesInput = {
    id?: bigint | number
    name: string
    userTracks?: UserTrackUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSolvesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSolvesInput, UserUncheckedCreateWithoutSolvesInput>
  }

  export type ProblemCreateWithoutSolvesInput = {
    id?: bigint | number
    name?: string
    url?: string
  }

  export type ProblemUncheckedCreateWithoutSolvesInput = {
    id?: bigint | number
    name?: string
    url?: string
  }

  export type ProblemCreateOrConnectWithoutSolvesInput = {
    where: ProblemWhereUniqueInput
    create: XOR<ProblemCreateWithoutSolvesInput, ProblemUncheckedCreateWithoutSolvesInput>
  }

  export type UserUpsertWithoutSolvesInput = {
    update: XOR<UserUpdateWithoutSolvesInput, UserUncheckedUpdateWithoutSolvesInput>
    create: XOR<UserCreateWithoutSolvesInput, UserUncheckedCreateWithoutSolvesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSolvesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSolvesInput, UserUncheckedUpdateWithoutSolvesInput>
  }

  export type UserUpdateWithoutSolvesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    userTracks?: UserTrackUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSolvesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    userTracks?: UserTrackUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ProblemUpsertWithoutSolvesInput = {
    update: XOR<ProblemUpdateWithoutSolvesInput, ProblemUncheckedUpdateWithoutSolvesInput>
    create: XOR<ProblemCreateWithoutSolvesInput, ProblemUncheckedCreateWithoutSolvesInput>
    where?: ProblemWhereInput
  }

  export type ProblemUpdateToOneWithWhereWithoutSolvesInput = {
    where?: ProblemWhereInput
    data: XOR<ProblemUpdateWithoutSolvesInput, ProblemUncheckedUpdateWithoutSolvesInput>
  }

  export type ProblemUpdateWithoutSolvesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type ProblemUncheckedUpdateWithoutSolvesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateWithoutUserTracksInput = {
    id?: bigint | number
    name: string
    solves?: SolveCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUserTracksInput = {
    id?: bigint | number
    name: string
    solves?: SolveUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUserTracksInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserTracksInput, UserUncheckedCreateWithoutUserTracksInput>
  }

  export type TrackCreateWithoutUserTrackInput = {
    id?: bigint | number
    name: string
    levels?: TrackLevelCreateNestedManyWithoutTrackInput
  }

  export type TrackUncheckedCreateWithoutUserTrackInput = {
    id?: bigint | number
    name: string
    levels?: TrackLevelUncheckedCreateNestedManyWithoutTrackInput
  }

  export type TrackCreateOrConnectWithoutUserTrackInput = {
    where: TrackWhereUniqueInput
    create: XOR<TrackCreateWithoutUserTrackInput, TrackUncheckedCreateWithoutUserTrackInput>
  }

  export type UserUpsertWithoutUserTracksInput = {
    update: XOR<UserUpdateWithoutUserTracksInput, UserUncheckedUpdateWithoutUserTracksInput>
    create: XOR<UserCreateWithoutUserTracksInput, UserUncheckedCreateWithoutUserTracksInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserTracksInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserTracksInput, UserUncheckedUpdateWithoutUserTracksInput>
  }

  export type UserUpdateWithoutUserTracksInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    solves?: SolveUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUserTracksInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    solves?: SolveUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TrackUpsertWithoutUserTrackInput = {
    update: XOR<TrackUpdateWithoutUserTrackInput, TrackUncheckedUpdateWithoutUserTrackInput>
    create: XOR<TrackCreateWithoutUserTrackInput, TrackUncheckedCreateWithoutUserTrackInput>
    where?: TrackWhereInput
  }

  export type TrackUpdateToOneWithWhereWithoutUserTrackInput = {
    where?: TrackWhereInput
    data: XOR<TrackUpdateWithoutUserTrackInput, TrackUncheckedUpdateWithoutUserTrackInput>
  }

  export type TrackUpdateWithoutUserTrackInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    levels?: TrackLevelUpdateManyWithoutTrackNestedInput
  }

  export type TrackUncheckedUpdateWithoutUserTrackInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    levels?: TrackLevelUncheckedUpdateManyWithoutTrackNestedInput
  }

  export type SolveCreateManyProblemInput = {
    id?: bigint | number
    userId: bigint | number
    submitCount: number
    readTime: number
    thinkTime: number
    codeTime: number
    debugTime: number
    onYourOwn: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SolveUpdateWithoutProblemInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    submitCount?: IntFieldUpdateOperationsInput | number
    readTime?: IntFieldUpdateOperationsInput | number
    thinkTime?: IntFieldUpdateOperationsInput | number
    codeTime?: IntFieldUpdateOperationsInput | number
    debugTime?: IntFieldUpdateOperationsInput | number
    onYourOwn?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSolvesNestedInput
  }

  export type SolveUncheckedUpdateWithoutProblemInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    userId?: BigIntFieldUpdateOperationsInput | bigint | number
    submitCount?: IntFieldUpdateOperationsInput | number
    readTime?: IntFieldUpdateOperationsInput | number
    thinkTime?: IntFieldUpdateOperationsInput | number
    codeTime?: IntFieldUpdateOperationsInput | number
    debugTime?: IntFieldUpdateOperationsInput | number
    onYourOwn?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SolveUncheckedUpdateManyWithoutProblemInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    userId?: BigIntFieldUpdateOperationsInput | bigint | number
    submitCount?: IntFieldUpdateOperationsInput | number
    readTime?: IntFieldUpdateOperationsInput | number
    thinkTime?: IntFieldUpdateOperationsInput | number
    codeTime?: IntFieldUpdateOperationsInput | number
    debugTime?: IntFieldUpdateOperationsInput | number
    onYourOwn?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrackLevelCreateManyTrackInput = {
    id?: bigint | number
    code: string
    order: number
  }

  export type UserTrackCreateManyTrackInput = {
    id?: bigint | number
    userId: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TrackLevelUpdateWithoutTrackInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    code?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    levelModules?: LevelModuleUpdateManyWithoutTrackLevelNestedInput
  }

  export type TrackLevelUncheckedUpdateWithoutTrackInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    code?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    levelModules?: LevelModuleUncheckedUpdateManyWithoutTrackLevelNestedInput
  }

  export type TrackLevelUncheckedUpdateManyWithoutTrackInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    code?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
  }

  export type UserTrackUpdateWithoutTrackInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUserTracksNestedInput
  }

  export type UserTrackUncheckedUpdateWithoutTrackInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    userId?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserTrackUncheckedUpdateManyWithoutTrackInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    userId?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LevelModuleCreateManyTrackLevelInput = {
    id?: bigint | number
    moduleId: bigint | number
    order: number
  }

  export type LevelModuleUpdateWithoutTrackLevelInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    order?: IntFieldUpdateOperationsInput | number
    module?: ModuleUpdateOneRequiredWithoutLevelModulesNestedInput
  }

  export type LevelModuleUncheckedUpdateWithoutTrackLevelInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    moduleId?: BigIntFieldUpdateOperationsInput | bigint | number
    order?: IntFieldUpdateOperationsInput | number
  }

  export type LevelModuleUncheckedUpdateManyWithoutTrackLevelInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    moduleId?: BigIntFieldUpdateOperationsInput | bigint | number
    order?: IntFieldUpdateOperationsInput | number
  }

  export type ModuleProblemCreateManyModuleInput = {
    id?: bigint | number
    problemId: bigint | number
    type: $Enums.ProblemType
    difficulty: $Enums.ProblemDifficulty
  }

  export type LevelModuleCreateManyModuleInput = {
    id?: bigint | number
    trackLevelId: bigint | number
    order: number
  }

  export type ModuleProblemUpdateWithoutModuleInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    problemId?: BigIntFieldUpdateOperationsInput | bigint | number
    type?: EnumProblemTypeFieldUpdateOperationsInput | $Enums.ProblemType
    difficulty?: EnumProblemDifficultyFieldUpdateOperationsInput | $Enums.ProblemDifficulty
  }

  export type ModuleProblemUncheckedUpdateWithoutModuleInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    problemId?: BigIntFieldUpdateOperationsInput | bigint | number
    type?: EnumProblemTypeFieldUpdateOperationsInput | $Enums.ProblemType
    difficulty?: EnumProblemDifficultyFieldUpdateOperationsInput | $Enums.ProblemDifficulty
  }

  export type ModuleProblemUncheckedUpdateManyWithoutModuleInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    problemId?: BigIntFieldUpdateOperationsInput | bigint | number
    type?: EnumProblemTypeFieldUpdateOperationsInput | $Enums.ProblemType
    difficulty?: EnumProblemDifficultyFieldUpdateOperationsInput | $Enums.ProblemDifficulty
  }

  export type LevelModuleUpdateWithoutModuleInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    order?: IntFieldUpdateOperationsInput | number
    trackLevel?: TrackLevelUpdateOneRequiredWithoutLevelModulesNestedInput
  }

  export type LevelModuleUncheckedUpdateWithoutModuleInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    trackLevelId?: BigIntFieldUpdateOperationsInput | bigint | number
    order?: IntFieldUpdateOperationsInput | number
  }

  export type LevelModuleUncheckedUpdateManyWithoutModuleInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    trackLevelId?: BigIntFieldUpdateOperationsInput | bigint | number
    order?: IntFieldUpdateOperationsInput | number
  }

  export type SolveCreateManyUserInput = {
    id?: bigint | number
    problemId: bigint | number
    submitCount: number
    readTime: number
    thinkTime: number
    codeTime: number
    debugTime: number
    onYourOwn: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserTrackCreateManyUserInput = {
    id?: bigint | number
    trackId: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SolveUpdateWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    submitCount?: IntFieldUpdateOperationsInput | number
    readTime?: IntFieldUpdateOperationsInput | number
    thinkTime?: IntFieldUpdateOperationsInput | number
    codeTime?: IntFieldUpdateOperationsInput | number
    debugTime?: IntFieldUpdateOperationsInput | number
    onYourOwn?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    problem?: ProblemUpdateOneRequiredWithoutSolvesNestedInput
  }

  export type SolveUncheckedUpdateWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    problemId?: BigIntFieldUpdateOperationsInput | bigint | number
    submitCount?: IntFieldUpdateOperationsInput | number
    readTime?: IntFieldUpdateOperationsInput | number
    thinkTime?: IntFieldUpdateOperationsInput | number
    codeTime?: IntFieldUpdateOperationsInput | number
    debugTime?: IntFieldUpdateOperationsInput | number
    onYourOwn?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SolveUncheckedUpdateManyWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    problemId?: BigIntFieldUpdateOperationsInput | bigint | number
    submitCount?: IntFieldUpdateOperationsInput | number
    readTime?: IntFieldUpdateOperationsInput | number
    thinkTime?: IntFieldUpdateOperationsInput | number
    codeTime?: IntFieldUpdateOperationsInput | number
    debugTime?: IntFieldUpdateOperationsInput | number
    onYourOwn?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserTrackUpdateWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    track?: TrackUpdateOneRequiredWithoutUserTrackNestedInput
  }

  export type UserTrackUncheckedUpdateWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    trackId?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserTrackUncheckedUpdateManyWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    trackId?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}