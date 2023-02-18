const selectedDAO = 'mongo';

let DAO = null;

switch(selectedDAO) {
    case 'mongo':
        DaoMongo.init();
        DAO = new DaoMongo();
        break;
    case "memory":
        DAO = new DaoFile('./src/persistence/DAOS/FileSystem/Fs.json');
        break;

} 