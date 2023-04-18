import { Generator } from "snowflake-generator";

export const GenerateSnowflake = () => {
    return new Generator(1420070400000).generate().toString()
}