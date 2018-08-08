import { ConnectionOptions } from 'typeorm';

export function getTypeORMConfig(): Partial<ConnectionOptions> {
  return {
    type: 'sqljs',
    database: new Uint8Array(),
    entities: [__dirname + '/../**/*.entity{.ts,.js}'],
    subscribers: [__dirname + '/../**/*.subscriber{.ts,.js}'],
    synchronize: true,
  };
}