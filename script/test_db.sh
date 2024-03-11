export PG_USER=yannchristophe
echo $PG_USER


#DDL
psql -d speData -f test_table.sql
#DML
psql  -d speData -f import_data_test.sql