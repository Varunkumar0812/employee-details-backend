import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Employee extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public role: string

  @column()
  public salary: number

  @column()
  public address: string

  @column()
  public mobile: bigint

  @column()
  public pincode: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  public static get hidden() {
    return ['createdAt', 'updatedAt']
  }
}
