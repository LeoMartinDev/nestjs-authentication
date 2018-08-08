import { BeforeInsert, BeforeUpdate, EntitySubscriberInterface, EventSubscriber, InsertEvent } from 'typeorm';
import { validate } from 'class-validator';
import { BadRequestException } from '@nestjs/common';

@EventSubscriber()
export class ValidationSubscriber implements EntitySubscriberInterface {
  async beforeInsert({ entity }: InsertEvent<any>) {
    const errors = await validate(entity);

    if (errors.length > 0) {
      throw new BadRequestException(errors, 'Bad parameters!');
    }
  }

  async beforeUpdate({ entity }: InsertEvent<any>) {
    const errors = await validate(entity);

    if (errors.length > 0) {
      throw new BadRequestException(errors, 'Bad parameters!');
    }
  }
}