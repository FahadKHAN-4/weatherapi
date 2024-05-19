import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class WeatherEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('double precision')
  lat: number;

  @Column('double precision')
  lon: number;

  @Column('json')
  data: any;
}