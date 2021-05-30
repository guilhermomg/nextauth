import { useContext, useEffect } from "react"
import { Can } from "../components/Can";

import { AuthContext } from "../contexts/AuthContext"
import { api } from "../services/apiClient";
import { withSSRAuth } from "../utils/withSSRAuth";
import decode from "jwt-decode";

export default function Metrics() {

  return (
    <>
      <h1>Metrics</h1>
    </>
  )
}

export const getServerSideProps = withSSRAuth(async (ctx) => {
  
  return {
    props: {}
  }
}, {
  permissions: ["metrics.list"],
  roles: ["administrator"]
})