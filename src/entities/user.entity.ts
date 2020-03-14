import { Entity, ObjectID, ObjectIdColumn, Column } from 'typeorm'

@Entity({ name: 'user' })
export class UserEntity {
  @ObjectIdColumn()
  userId!: ObjectID

  @Column({ length: 500 })
  firstName!: string

  @Column({ length: 500 })
  lastName!: string
}
