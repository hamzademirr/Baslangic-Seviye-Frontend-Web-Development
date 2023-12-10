const USERS = ["AYSE", "MehMet", "TugCE", "AkSEL"];

const NEW_USERS = USERS.map((user) => user.toLowerCase());
console.log(NEW_USERS);

const USER_OBJ = USERS.map((item) => {
  return {
    userName: item,
    shortName: `${item[0]}.`,
    newName: `${item[0].toUpperCase()}${item.slice(1).toLowerCase()}`,
  };
});

// const USER_OBJ = USERS.map((item) => (
//         {
//             userName: item,
//             shortName: `${item[0]}.`,
//             newName: `${item[0].toUpperCase()}${item.slice(1).toLowerCase()}`,
//         }
//     )
// ); //obje dondurelecegini return veya parantezler arasina alarak belirtmek gerekmekte
console.log(USER_OBJ);
