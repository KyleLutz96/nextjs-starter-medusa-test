"use client"

import { Button } from "@medusajs/ui";
import LocalizedClientLink from "@modules/common/components/localized-client-link";
import NativeSelect from "@modules/common/components/native-select"
import { useRef, useState } from "react"

const InmateSelect = () => {
const inmateList = [
  {
    "displayName": "CHADICK, CHRISTOPHER - 202160374",
    "id": "202160374"
  },
  {
    "displayName": "HARRIS, JACKIE - 201927192",
    "id": "201927192"
  },
  {
    "displayName": "SMITH, CHARLES - 202260786",
    "id": "202260786"
  },
  {
    "displayName": "CHADICK, BRET - 201943926",
    "id": "201943926"
  },
  {
    "displayName": "TUNKS, KRISTEN - 202261400",
    "id": "202261400"
  },
  {
    "displayName": "CLARKSON, SHANNON - 202261420",
    "id": "202261420"
  },
  {
    "displayName": "SPIVEY, JAMES - 201922642",
    "id": "201922642"
  },
  {
    "displayName": "LOWHORN, TAWNEY - 201926380",
    "id": "201926380"
  },
  {
    "displayName": "TARRENCE, DESMOND - 201923149",
    "id": "201923149"
  },
  {
    "displayName": "MALONE, STEVEN - 201920637",
    "id": "201920637"
  },
  {
    "displayName": "WYATT, BRIAN - 202361509",
    "id": "202361509"
  },
  {
    "displayName": "TAYLOR, DIMITRI - 201942403",
    "id": "201942403"
  },
  {
    "displayName": "MCCLOUD, JAMES - 201935279",
    "id": "201935279"
  },
  {
    "displayName": "GOSNELL, CHRISTOPHER - 201907735",
    "id": "201907735"
  },
  {
    "displayName": "KEOWN, BILLY - 202159692",
    "id": "202159692"
  },
  {
    "displayName": "HOWARD-WILSON, CASSIENA - 201922880",
    "id": "201922880"
  },
  {
    "displayName": "SKIPWORTH, EMILY - 201954378",
    "id": "201954378"
  },
  {
    "displayName": "BOYD, CYNTHIA - 202261000",
    "id": "202261000"
  },
  {
    "displayName": "HARPER, NIKKI - 202160141",
    "id": "202160141"
  },
  {
    "displayName": "HENDERSON, DAVID - 201926576",
    "id": "201926576"
  },
  {
    "displayName": "HINES, ROBERT - 201926362",
    "id": "201926362"
  },
  {
    "displayName": "EVANS, TOMMY - 202260577",
    "id": "202260577"
  },
  {
    "displayName": "ROGERS, FRANKIE - 202159630",
    "id": "202159630"
  },
  {
    "displayName": "TRAUGHBER, ZACKERY - 202160282",
    "id": "202160282"
  },
  {
    "displayName": "GROSS, GLEN - 202160177",
    "id": "202160177"
  },
  {
    "displayName": "HOEFLER, BRANDON - 201948945",
    "id": "201948945"
  },
  {
    "displayName": "CHADICK, CHRISTOPHER - 202160374"
  },
  {
    "displayName": "HARRIS, JACKIE - 201927192"
  },
  {
    "displayName": "SMITH, CHARLES - 202260786"
  },
  {
    "displayName": "CHADICK, BRET - 201943926"
  },
  {
    "displayName": "TUNKS, KRISTEN - 202261400"
  },
  {
    "displayName": "CLARKSON, SHANNON - 202261420"
  },
  {
    "displayName": "SPIVEY, JAMES - 201922642"
  },
  {
    "displayName": "LOWHORN, TAWNEY - 201926380"
  },
  {
    "displayName": "TARRENCE, DESMOND - 201923149"
  },
  {
    "displayName": "MALONE, STEVEN - 201920637"
  },
  {
    "displayName": "WYATT, BRIAN - 202361509"
  },
  {
    "displayName": "TAYLOR, DIMITRI - 201942403"
  },
  {
    "displayName": "MCCLOUD, JAMES - 201935279"
  },
  {
    "displayName": "GOSNELL, CHRISTOPHER - 201907735"
  },
  {
    "displayName": "KEOWN, BILLY - 202159692"
  },
  {
    "displayName": "HOWARD-WILSON, CASSIENA - 201922880"
  },
  {
    "displayName": "SKIPWORTH, EMILY - 201954378"
  },
  {
    "displayName": "BOYD, CYNTHIA - 202261000"
  },
  {
    "displayName": "HARPER, NIKKI - 202160141"
  },
  {
    "displayName": "HENDERSON, DAVID - 201926576"
  },
  {
    "displayName": "HINES, ROBERT - 201926362"
  },
  {
    "displayName": "EVANS, TOMMY - 202260577"
  },
  {
    "displayName": "ROGERS, FRANKIE - 202159630"
  },
  {
    "displayName": "TRAUGHBER, ZACKERY - 202160282"
  },
  {
    "displayName": "GROSS, GLEN - 202160177"
  },
  {
    "displayName": "HOEFLER, BRANDON - 201948945"
  }
];
const countyList = [
  {
    "displayName": "Allen County",
    "id": "Allen County"
  },
  {
    "displayName": "Bell County",
    "id": "Bell County"
  },
  {
    "displayName": "Bourbon County",
    "id": "Bourbon County"
  },
  {
    "displayName": "Carter County",
    "id": "Carter County"
  },
  {
    "displayName": "Franklin County",
    "id": "Franklin County"
  },
  {
    "displayName": "Knox County",
    "id": "Knox County"
  },
  {
    "displayName": "Montgomery County",
    "id": "Montgomery County"
  }
];
const stateList = [
  {
    "displayName": "Indiana",
    "id": "Indiana"
  },
  {
    "displayName": "Kentucky",
    "id": "Kentucky"
  }
]

const [selectedState, setSelectedState] = useState("");
const [selectedCounty, setSelectedCounty] = useState("");
const [selectedInmate, setSelectedInmate] = useState("");

const isButtonDisabled = !selectedState || !selectedCounty || !selectedInmate;

  return (
      <div
        className="border-2 rounded-rounded justify-between py-4 px-6"
      >
        <div className="py-2">
          <div className="text-left">State</div>
          <NativeSelect
            defaultValue=""
            onChange={(e) => setSelectedState(e.target.value)}
          >
          {stateList?.map((state, index) => (
            <option key={index} value={state.id}>
              {state.displayName}
            </option>
          ))}
          </NativeSelect>
        </div>
        <div className="py-2">
          <div className="text-left">County</div>
          <NativeSelect
            defaultValue=""
            onChange={(e) => setSelectedCounty(e.target.value)}
          >
          {countyList?.map((county, index) => (
            <option key={index} value={county.id}>
              {county.displayName}
            </option>
          ))}
        </NativeSelect>
        </div>
        <div className="py-2">
          <div className="text-left">Inmate</div>

          <NativeSelect
            defaultValue=""
            onChange={(e) => setSelectedInmate(e.target.value)}
          >
          {inmateList?.map((inmate, index) => (
            <option key={index} value={inmate.id}>
              {inmate.displayName}
            </option>
          ))}
          </NativeSelect>
        </div>
        <div className="py-4">
            <LocalizedClientLink href="/store" passHref>
                <Button
                    className="w-full"
                    size="large"
                    disabled={isButtonDisabled}
                >
                    Go to Store
                </Button>
            </LocalizedClientLink>
        </div>
      </div>
  )
}

export default InmateSelect