/*
  Author: Tomás Fernández Abrevaya
*/
import createErrorFactory from "../../shared/errors/ErrorFactory.js";

function createAuthUser(dao, mailer, daoEmailsTexts) {
  const emailCode = "AUTH_USER";
  const errorFactory = createErrorFactory();
  return {
    authUser: async (idUser) => {
      const user = await dao.getById(idUser);
      user.canShareTexts = true;
      const result = await dao.update(user);
      if (!result) {
        errorFactory.createUserNotFoundError("No se pudo encontrar al usuario");
      }
      console.log("Updated user")
      const dataEmail = await daoEmailsTexts.getDataText(emailCode);
      await mailer.send(dataEmail.text, user.email, dataEmail.subject);
      return user
    },
  };
}

export default createAuthUser;
