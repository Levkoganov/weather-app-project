import swal from "sweetalert"; // Alert Library

const saveMsg = () => {
  swal({
    title: "City Saved!",
    text: "Please Check the favorite page",
    icon: "success",
  });
};

const errorMsg = () => {
  swal({
    title: "City Already saved!",
    text: "You cannot add the same city twice",
    icon: "error",
    dangerMode: true,
  });
};

export { saveMsg, errorMsg };
