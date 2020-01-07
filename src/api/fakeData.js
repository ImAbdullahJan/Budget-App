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

export const accountType = [
  {
    value: "Cash",
    label: "Cash"
  },
  {
    value: "General",
    label: "General"
  },
  {
    value: "Bank Account",
    label: "Bank Account"
  },
  {
    value: "Credit Card",
    label: "Credit Card"
  },
  {
    value: "Account with Overdraft",
    label: "Account with Overdraft"
  }
];

export const SelectColors = [
  {
    value: "#f44336",
    label: "Red"
  },
  {
    value: "#e91e63",
    label: "Pink"
  },
  {
    value: "#9c27b0",
    label: "Purple"
  },
  {
    value: "#2196f3",
    label: "Blue"
  },
  {
    value: "#4caf50",
    label: "Green"
  },
  {
    value: "#ffeb3b",
    label: "Yellow"
  },
  {
    value: "#ff9800",
    label: "Orange"
  },
  {
    value: "#9e9e9e",
    label: "Grey"
  }
];

export const SelectCurrency = [
  {
    value: "PKR",
    label: "PKR"
  },
  {
    value: "$",
    label: "DOLLAR"
  }
];
