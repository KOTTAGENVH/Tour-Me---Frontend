import React from "react";
import { useQuery } from "react-query";
import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";
import IconButton from "@mui/material/IconButton";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import CircularProgress from "@mui/material/CircularProgress";
import { useState } from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setidAction } from "../../../Redux/idcapture/idcaptureAction";
import { ToastContainer } from "react-toastify";
import { getDestinationOrdersByUseremail } from "../../../Api/services/destinationService";

function ViewDestinationOrder() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [progress, setProgress] = React.useState(0);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loggedUser = useSelector((state) => state.auth.loggedUser);
  const darkmode = useSelector((state) => state.darkmode.darkmode);

  const { data, isLoading } = useQuery({
    queryFn: () => getDestinationOrdersByUseremail(loggedUser?.email),
  });

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  let formattedSelectedDate = null;

  if (selectedDate) {
    const dateObject = new Date(selectedDate);
    formattedSelectedDate = dateObject.toLocaleDateString("en-GB");
  }

  // Apply filter function to the data if data is available
  const filteredData = data ?? []; // Providing a default value for data

  // Only filter data if the selected date is defined
  const filteredResults = selectedDate
    ? filteredData.filter((item) => {
        // Format item date to DD/MM/YYYY
        // const itemDate = item.date.split("/").reverse().join("/");
        return item?.date === formattedSelectedDate;
      })
    : filteredData;
  const handleDarkmode = () => {
    if (darkmode) {
      return "white";
    } else {
      return "black";
    }
  };

  const columns = useMemo(
    () => [
      {
        accessorKey: "InvoiceNo",
        header: "Invoice No",
        size: 150,
      },
      {
        accessorKey: "productname",
        header: "Product Name",
        size: 150,
      },
      {
        accessorKey: "total",
        header: "Total Tickets",
        size: 200,
      },
      {
        accessorKey: "status",
        header: "Status",
        size: 150,
      },
      {
        accessorKey: "date",
        header: "Date",
        size: 150,
      },
      {
        accessorKey: "actions",
        header: "View",
        size: 150,
        Cell: ({ row }) => (
          <div>
            <IconButton
              onClick={() => handleView(row)}
              sx={{
                margin: "5px",
                padding: "8px",
              }}
            >
              <RemoveRedEyeIcon />
            </IconButton>
          </div>
        ),
      },
    ],
    []
  );

  const handleView = (row) => {
    dispatch(setidAction(row?.original?.destinationid));
    navigate("/viewone/destination");
  };

  const table = useMaterialReactTable({
    columns,
    data: filteredResults,
    enableColumnActions: false,
    muiTableContainerProps: {
      style: {
        backgroundColor: "rgba(255, 255, 255, 0.5)",
        backdropFilter: "blur(10px)",
      },
    },
  });

  return (
    <div>
      <ToastContainer />
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          label="Filter by date"
          value={selectedDate}
          onChange={handleDateChange}
          sx={{
            color: handleDarkmode(),
            margin: "20px",
            padding: "10px",
            fontSize: "10px",
            borderRadius: "20px",
            backgroundColor: "rgba(255, 255, 255, 0.2)",
            backdropFilter: "blur(10px)",
            "& input, & label": {
              color: handleDarkmode(),
            },
          }}
        />
      </LocalizationProvider>
      {isLoading && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <CircularProgress variant="determinate" value={progress} />
        </div>
      )}
      <MaterialReactTable table={table} />;
    </div>
  );
}

export default ViewDestinationOrder;
