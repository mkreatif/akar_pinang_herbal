import { GET_BANNERS } from "../constants/types";

export const getAllBanner = () => {
  const banners = [
    {
      title: "First slide label",
      description: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
      img: "/assets/banner-1.jpg",
    },
    {
      title: "Second slide label",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      img: "/assets/banner-2.jpg",
    },
    {
      title: "Third Slide Label",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      img: "/assets/banner-3.jpg",
    },
  ];

  return {
    type: GET_BANNERS,
    payload: banners,
  };
};

export const getDashboardContent = () => (dispatch, getState) => {
  dispatch(getAllBanner());
};