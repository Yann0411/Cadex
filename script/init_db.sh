export PG_USER=yannchristophe
echo $PG_USER


#DDL
psql -d cadex -f create_tables.sql
#DML
psql -d cadex -f import_data.sql