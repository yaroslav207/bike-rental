import { Knex } from 'knex';
import { formatISO as getFormattedISODate } from 'date-fns';

const TABLE_NAME = 'bike';

enum BikeType {
  ROAD = 'road',
  MOUNTAIN = 'mountain',
  ELECTRIC = 'electric',
  CLASSIC = 'classic',
}

export async function up(knex: Knex): Promise<void> {
  const dateNowISO = getFormattedISODate(new Date());

  return knex.schema.createTable(TABLE_NAME, (table) => {
    table.increments('id').primary();
    table.string('name').notNullable();
    table
      .enum('type', [BikeType.ROAD, BikeType.MOUNTAIN, BikeType.ELECTRIC, BikeType.CLASSIC])
      .defaultTo(BikeType.CLASSIC);
    table.float('price').notNullable();
    table.dateTime('created_at').notNullable().defaultTo(dateNowISO);
    table.dateTime('updated_at').notNullable().defaultTo(dateNowISO);
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists(TABLE_NAME);
}

