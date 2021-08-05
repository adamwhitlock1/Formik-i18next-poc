// Helper styles for demo
import "./helper.css";
import { DisplayFormikState } from "./helper";
import { useTranslation } from "react-i18next";
import "./i18next";
import React from "react";
import { render } from "react-dom";
import { Formik } from "formik";
import * as Yup from "yup";

const App = () => {
  const { t, i18n } = useTranslation();
  const href = "#";
  return (
    <div className="app">
      <h1>{t("headerText")}</h1>

      <Formik
        initialValues={{ email: "" }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 500);
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string()
            .email()
            .required(t("emailRequired"))
        })}
      >
        {props => {
          const {
            values,
            touched,
            errors,
            dirty,
            isSubmitting,
            handleChange,
            handleBlur,
            handleSubmit,
            handleReset
          } = props;
          return (
            <form onSubmit={handleSubmit}>
              <label htmlFor="email" style={{ display: "block" }}>
                Email
              </label>
              <input
                id="email"
                placeholder={t("emailPlaceHolder")}
                type="text"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className={
                  errors.email && touched.email
                    ? "text-input error"
                    : "text-input"
                }
              />
              {errors.email && touched.email && (
                <div className="input-feedback">{errors.email}</div>
              )}

              <button
                type="button"
                className="outline"
                onClick={handleReset}
                disabled={!dirty || isSubmitting}
              >
                {t("reset")}
              </button>
              <button type="submit" disabled={isSubmitting}>
                {t("submit")}
              </button>
              <div>
                <a href={href} onClick={() => i18n.changeLanguage("en")}>
                  English
                </a>
                &nbsp;
                <a href={href} onClick={() => i18n.changeLanguage("fr")}>
                  Francais
                </a>
              </div>
              <DisplayFormikState {...props} />
            </form>
          );
        }}
      </Formik>
    </div>
  );
};

render(<App />, document.getElementById("root"));
