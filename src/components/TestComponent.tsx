"use client";
import AccordionLayout from "@/utils/AccordianLayout/AccordianLayout";
import CButton from "@/utils/CButton/CButton";
import CCard from "@/utils/CCard/CCard";
import CCheckRadio from "@/utils/CCheckRadio/CCheckRadio";
import CDropDownButton from "@/utils/CDropDownButton/CDropDownButton";
import CFileInput from "@/utils/CFileinput/CFileinput";
import CInput from "@/utils/CInput/CInput";
import CLinkButton from "@/utils/CLinkButton/CLinkButton";
import CModal from "@/utils/CModal/CModal";
import COverlayLoader from "@/utils/COverlayLoader/COverlayLoader";
import CPagination from "@/utils/CPagination/CPagination";
import CSelect from "@/utils/CSelect/CSelect";
import CTextArea from "@/utils/CTextArea/CTextArea";
import { errorAlert, successAlert, warningAlert } from "@/utils/alert-function";
import React, { useState } from "react";
import { BiLogInCircle } from "react-icons/bi";

const accordionoptions = [
  { title: "a1", des: "hello" },
  { title: "a2", des: "mello" },
  { title: "a3", des: "tello" },
];

const options = [
  { option: "option1" },
  { option: "option2" },
  { option: "option3" },
];

const TestComponent = () => {
  const [accordionIndex, setAccordionIndex] = useState<number>(0);
  const [dropdown, setDropdown] = useState<boolean>(false);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [data, setData] = useState<{
    description: string;
    message: string;
    phone: any;
    file: any;
    select: any;
  }>({
    description: "",
    message: "",
    phone: null,
    file: "",
    select: options?.[0].option,
  });

  return (
    <div>
      <CCard title="custom card">
        <CButton variant="contained" fullWidth>
          solid button
        </CButton>
        <CLinkButton href="/quickLinks">সকল লিংক দেখুন</CLinkButton>
      </CCard>

      <CCard title="custom accordion">
        {accordionoptions.map((item, i) => (
          <AccordionLayout
            key={i}
            title={item?.title}
            index={i}
            activeIndex={accordionIndex}
            setActiveIndex={setAccordionIndex}
          >
            <div key={i} className="text-sm font-medium my-1 text-justify">
              {item?.des}
            </div>
          </AccordionLayout>
        ))}
      </CCard>

      <CCard title="custom check radio and select">
        <CCheckRadio type="radio"></CCheckRadio>
        <CCheckRadio type="checkbox"></CCheckRadio>
      </CCard>

      <CCard title="custom dropdown button">
        <div className="flex justify-center items-center">
          <CDropDownButton
            type="button"
            variant="contained"
            dropdown={dropdown}
            setDropdown={setDropdown}
            btnText="Login"
            childIcon={<BiLogInCircle />}
            btnIcon={<BiLogInCircle />}
            menuList={[
              {
                text: "Admin Login",
                href: "/login",
                query: { role: "admin" },
              },
              {
                text: "Customer Login",
                href: "/login",
                query: { role: "customer" },
              },
            ]}
          />
        </div>
      </CCard>

      <CCard title="custom input">
        <div className="">
          <CFileInput
            label="Image"
            // onChange={handleImageChange}
            // disabled={isEditable}
            accept="image/*"
            // files={data?.image}
          />
        </div>

        <div className="">
          <CInput
            onChange={(e) => {
              if (e.target.value) {
                // setError({
                //   ...error,
                //   phone: "",
                // });
              }
              setData({ ...data, phone: e.target.value });
            }}
            defaultValue={data?.phone}
            id="phone2"
            type="number"
            label="Phone Number"
            placeholder="Phone Number"
            // errorQuery={error?.phone ? true : false}
            // className={`${error.phone ? "error-input" : "normal-input"}`}
            // disabled={isEditable}
          />
        </div>

        <div className="">
          <CSelect
            label="Notice Type"
            defaultValue={{ value: data.select, label: data.select }} // Set the default value based on data.noticeType
            options={options.map((notice: any) => ({
              value: notice.option,
              label: notice.option,
            }))}
            className="basic-single"
            classNamePrefix="select"
            onChange={(selectedOptions) => {
              setData({ ...data, select: selectedOptions.value });
            }}
          />
        </div>

        <div className="">
          <CTextArea
            label="Description"
            onChange={(e) => {
              if (e.target.value) {
                // setError({
                //   ...error,
                //   description: "",
                // });
              }
              setData({ ...data, description: e.target.value });
            }}
            id="description"
            placeholder="Description"
          />
        </div>
      </CCard>

      <CCard title="custom modal">
        <CButton variant="solid" onClick={() => setOpenModal(true)}>
          {" "}
          open the modal{" "}
        </CButton>
        <CModal
          open={openModal}
          onClose={() => setOpenModal(false)}
          title="Add title"
          width={"w-full md:w-3/4 lg:w-1/2"}
        >
          <div className="">MODAL CONTENT</div>
        </CModal>
      </CCard>

      {/* <CCard title="custom overlay loader"><COverlayLoader /></CCard> */}

      <CCard title="custom pagination">
        {/* now here all the values are imaginory so you can only view it, it will not work */}
        <CPagination
          data={["item1", "item2", "item3", "item4", "item5"]}
          totalPages={5}
          currentPage={1}
          itemsPerPage={2}
          handlePageChange={setAccordionIndex}
        />
      </CCard>

      <CCard title="custom alert">
        <div className="flex justify-around">
          <CButton
            variant="solid"
            onClick={() => successAlert({ title: "This is success alert" })}
          >
            success alert
          </CButton>
          <CButton
            variant="outline"
            onClick={() => errorAlert({ title: "This is error alert" })}
            color="red"
          >
            error alert
          </CButton>
          <CButton
            variant="contained"
            onClick={() => warningAlert({ title: "This is warning alert" })}
          >
            warning alert
          </CButton>
        </div>
      </CCard>
    </div>
  );
};

export default TestComponent;
