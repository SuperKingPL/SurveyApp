from snowflake import SnowflakeGenerator

def GenerateSnowflake():
    gen = SnowflakeGenerator(42)
    return next(gen)