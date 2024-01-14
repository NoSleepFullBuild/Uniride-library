import { DataSource } from 'typeorm';
import "reflect-metadata"

export class PostgresUtils {
    private static dataSource: DataSource;

    public static async initialize(): Promise<void> {
        this.dataSource = new DataSource({
            type: 'postgres',
            url: process.env.POSTGRES_URL,
            entities: [], // faut penser a ajouter les entités ici
            synchronize: true, 
        });

        await this.dataSource.initialize();
    }

    public static async closeConnection(): Promise<void> {
        await this.dataSource.destroy();
    }

    public static getRepository<Entity>(entity: new () => Entity) {
        return this.dataSource.getRepository(entity);
    }


    /*
    public static async dropDatabase(): Promise<void> {
        await Client.connection.dropDatabase();
    }
*/

}
