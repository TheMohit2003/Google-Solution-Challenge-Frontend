// Import necessary dependencies and components
import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Button, Input, Upload, Select, message } from "antd";
import { UploadOutlined, LoadingOutlined } from "@ant-design/icons";

// Validation schema using Yup
const validationSchema = Yup.object().shape({
  retire_status: Yup.string().required("CAPA Retire Status is required"),
  retire_initiator_comments: Yup.string().required(
    "Retire Initiator Comments are required",
  ),
});

const Example = (props) => {
  // Function to handle form submission
  const submitForm = async (values) => {
    // Your logic for handling form submission
    console.log("Form submitted with values:", values);
    // You may perform additional actions here, such as API calls or dispatching Redux actions
  };

  // Function to handle file upload
  const beforeUpload = (file) => {
    // Your logic for handling file upload
    console.log("Uploading file:", file);
    return true; // Allow upload
  };

  return (
    <Formik
      initialValues={{
        retire_initiator_comments: "",
        retire_status: "",
      }}
      validationSchema={validationSchema}
      onSubmit={submitForm}
    >
      {({
        values,
        errors,
        touched,
        setFieldValue,
        handleChange,
        handleBlur,
        handleSubmit,
      }) => (
        <Form>
          <div className="row details-container w-100">
            <div className="col-4">
              <div className="input-container">
                <Field
                  name="retire_status"
                  as={Select}
                  placeholder="CAPA Retire Status"
                  className="input-select"
                >
                  <Select.Option value="CAPA No Longer Needed">
                    CAPA No Longer Needed
                  </Select.Option>
                  <Select.Option value="Process Change">
                    Process Change
                  </Select.Option>
                  <Select.Option value="Other">Other</Select.Option>
                </Field>
                {errors.retire_status && touched.retire_status && (
                  <small className="form-err">Required</small>
                )}
              </div>
            </div>
            <div className="col-12">
              <div className="textarea-container">
                <Field
                  name="retire_initiator_comments"
                  as={Input.TextArea}
                  rows={5}
                  maxLength={550}
                  placeholder="Retire Initiator Comments"
                />
                {errors.retire_initiator_comments &&
                  touched.retire_initiator_comments && (
                    <small className="form-err">
                      {errors.retire_initiator_comments}
                    </small>
                  )}
                <small className="small-text">
                  {values.retire_initiator_comments
                    ? values.retire_initiator_comments.length
                    : "0"}
                  /550
                </small>
              </div>
            </div>
            <div className="col-12">
              <Field
                name="attachment"
                as={Upload}
                showUploadList={false}
                beforeUpload={beforeUpload}
              >
                <Button className="upload-btn" disabled={props.fileLoader}>
                  {props.fileLoader ? (
                    <span>
                      <LoadingOutlined /> Uploading...
                    </span>
                  ) : (
                    <span>
                      <UploadOutlined /> Click to Upload
                    </span>
                  )}
                </Button>
              </Field>
            </div>
            {/* Add your attachment display logic here */}
            <div className="col-12 justify-content-end w-100">
              <Button
                type="primary"
                htmlType="submit"
                className="mt-4 float-right"
              >
                Submit
              </Button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default Example;
