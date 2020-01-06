import React from "react";
import { CasinoOutlined } from "@material-ui/icons";

export const accountsData = [
  {
    id: 0,
    icon: <CasinoOutlined style={{ fontSize: "45px" }} />,
    bgcolor: "#00897B",
    name: "A-Account 1",
    type: "Cash",
    currency: "PKR",
    balance: 10000
  },
  {
    id: 1,
    icon: <CasinoOutlined style={{ fontSize: "45px" }} />,
    bgcolor: "#4DB6AC",
    name: "C-Account 2",
    type: "General",
    currency: "PKR",
    balance: 1000
  },
  {
    id: 2,
    icon: <CasinoOutlined style={{ fontSize: "45px" }} />,
    bgcolor: "#64DD17",
    name: "B-Account 3",
    type: "Bank Account",
    currency: "PKR",
    balance: 100
  },
  {
    id: 3,
    icon: <CasinoOutlined style={{ fontSize: "45px" }} />,
    bgcolor: "#FFB300",
    name: "Z-Account 4",
    type: "Credit Card",
    currency: "PKR",
    balance: 100000
  }
];

export const sortingArray = [
  {
    value: "10",
    path: "id",
    order: "asc",
    label: "Default"
  },
  {
    value: "20",
    path: "name",
    order: "asc",
    label: "A-Z"
  },
  {
    value: "30",
    path: "name",
    order: "desc",
    label: "Z-A"
  },
  {
    value: "40",
    path: "balance",
    order: "asc",
    label: "Balance (Lowest first)"
  },
  {
    value: "50",
    path: "balance",
    order: "desc",
    label: "Balance (Highest first)"
  }
];
