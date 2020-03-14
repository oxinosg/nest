
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class CreateUserInput {
    firstName?: string;
    lastName?: string;
}

export abstract class IMutation {
    abstract createUser(createUserInput?: CreateUserInput): User | Promise<User>;
}

export abstract class IQuery {
    abstract get(): string | Promise<string>;

    abstract create(input: CreateUserInput): User | Promise<User>;

    abstract list(): User[] | Promise<User[]>;
}

export class User {
    userId?: string;
    firstName?: string;
    lastName?: string;
}
