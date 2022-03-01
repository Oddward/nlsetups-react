import sqlite3 from 'sqlite3'


let db = new sqlite3.Database('../db/lib.db', ( error ) => {
    if ( error ) {
        return console.error( error.message )
    } else {
        db.serialize(() => {
            db.each(
                'SELECT * from '
            )
        })
    }

    console.log('Connected to lib database')
})

