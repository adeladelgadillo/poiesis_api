/*
  Author: Alex Costa
*/
import createUserDao from "../persistence/userDao.js";
import createEmailTextDao from "../persistence/emailTextDao.js";
import createMailerFactory from "../../shared/mailer/MailerFactory.js";
import createRegisterUser from "../business/registerUser.js";

const daoUsers = createUserDao();
const daoEmailTexts = createEmailTextDao();
const mailer = await createMailerFactory();

function createRegisterUserFactory() {
  const registerUser = createRegisterUser(daoUsers, daoEmailTexts, mailer);
  return registerUser;
}

export default createRegisterUserFactory;
