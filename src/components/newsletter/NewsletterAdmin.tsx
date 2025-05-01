
import React from "react";
import { useNewsletterContext } from "./NewsletterContext";
import NewsletterAdminForm from "./NewsletterAdminForm";

const NewsletterAdmin = () => {
  const {
    isAdminMode,
    formData,
    handleChange,
    handleFileChange,
    handleSubmit,
    resetForm,
    selectedNewsletter,
    uploadMethod,
    setUploadMethod
  } = useNewsletterContext();

  if (!isAdminMode) return null;

  return (
    <NewsletterAdminForm
      formData={formData}
      handleChange={handleChange}
      handleFileChange={handleFileChange}
      handleSubmit={handleSubmit}
      resetForm={resetForm}
      selectedNewsletter={selectedNewsletter}
      uploadMethod={uploadMethod}
      setUploadMethod={setUploadMethod}
    />
  );
};

export default NewsletterAdmin;
