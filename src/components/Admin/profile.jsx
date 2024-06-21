import axios from "axios";
import { useState, useEffect } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
} from "@material-tailwind/react";

function Profile({  item  }) {
  
  const [doctors, setProducts] = useState([]);
  const getAllDoctors = async () => {
    const { data: doctors } = await axios.get(
      "http://localhost:3000/patientRouter/getAllPatient"
    );
    setProducts(doctors.response);
  };
  useEffect(() => {
    void getAllDoctors();
  }, []);
  return (
    <>
      {/* <div className="w-1/5 h-full bg-yellow-200 flex flex-wrap py-2">
        {doctors != null ? (
          <>
            {doctors.map((item, index) => {
              return <Doctorsdetail item={item} key={index} />;
            })}
          </>
        ) : (
          <>
            <p>No Doctor Exists</p>
          </>
        )}
      </div> */}
      <div className="mt-12 mb-12 ml-8 mr-8 flex flex-col gap-12 w-full">
        <Card>
          <CardHeader variant="gradient" color="gray" className="mb-8 p-6 mr-8 ml-8  bg-gray-800">
            <Typography variant="h6" color="white">
              Doctor Table
            </Typography>
          </CardHeader>
          <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
            <table className="w-full min-w-[640px] table-auto">
              <thead>
                <tr>
                  {["Doctor Names", "specialization", "status", ""].map((el) => (
                    <th
                      key={el}
                      className="border-b border-blue-gray-50 py-3 px-5 text-left"
                    >
                      <Typography
                        variant="small"
                        className="text-[11px] font-bold uppercase text-blue-gray-400"
                      >
                        {el}
                      </Typography>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {doctors.map(
                  (item, index) => {
                    const className = `py-3 px-5 ${index === item.length - 1
                        ? ""
                        : "border-b border-blue-gray-50"
                      }`;

                    return (
                      <tr key={index}>
                        <td className={className}>
                          <div className="flex items-center gap-4">
                            <Avatar src="/img/user.png" alt={item.firstName} size="sm" variant="rounded" />
                            <div>
                              <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-semibold"
                              >
                                {item.firstName}
                              </Typography>
                              <Typography className="text-xs font-normal text-blue-gray-500">
                                {item.lastName}
                              </Typography>
                            </div>
                          </div>
                        </td>
                        <td className={className}>
                          <Typography className="text-xs font-semibold text-blue-gray-600">
                            {item.specialization}
                          </Typography>
                          <Typography className="text-xs font-normal text-blue-gray-500">
                            {item.specialization}
                          </Typography>
                        </td>
                         
                        <td className={className}>
                          <Typography className="text-xs font-semibold text-black w-1/5 py-0.5 px-2 text-[11px] font-medium w-fit"
                          
                          style={{ backgroundColor: item.status === 'pending' ? 'green' : 'grey'}}
                          >
                            {item.status}
                          </Typography>
                        </td>
                        <td className={className}>
                          <Typography
                            as="a"
                            href="#"
                            className="text-xs font-semibold text-blue-gray-600"
                          >
                            Edit
                          </Typography>
                        </td> 
                      </tr>
                    );
                  }
                )}
              </tbody>
            </table>
          </CardBody>
        </Card>
      </div>
    </>
  );
}
export default Profile;
