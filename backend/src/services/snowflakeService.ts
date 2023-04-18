import { Generator } from "snowflake-generator";

export const GenerateSnowflake = () => {
    return new Generator(1420070400000).generate().toString()
}
export const GenerateDiscriminator = () => {
    return Math.floor(Math.random() * (Math.floor(9999) - Math.ceil(1111) + 1)) + Math.ceil(1111)
}