import { body } from "express-validator";

body("email")
  .trim()
  .escape()
  .notEmpty()
  .withMessage("empty email")
  .isEmail()
  .withMessage("Invalid Email");

  body('password').isString().withMessage('Invalid String').isStrongPassword({minLength: 8}).withMessage('Password too Short');

const validateString = (field, optional = true) => {
  optional
    ? body(field)
        .trim()
        .escape()
        .isString()
        .withMessage("Invalid String")
        .notEmpty()
        .withMessage("Empty String")
        .optional()
    : body(field)
        .trim()
        .escape()
        .isString()
        .withMessage("Invalid String")
        .notEmpty()
        .withMessage("Empty String");
};

body('rollNo').isNumeric().withMessage('Invalid Roll no').isLength({min: 7, max: 7}).withMessage('Invalid Roll no').matches(/^21\d{5}$/).withMessage('Invalid Roll no');


//==============================================================================
//                                Derived Validation
//==============================================================================

validateString('class').matches(/^\d+[A-Z]\d+$/);
validateString('name').isLength({min: 3, max: 30});
