import React, { useEffect, useState } from "react";
import { getPost } from "./PostApi";

function JsonPlaceholder() {
  const [userInfo, setUserInfo] = useState([]);
  console.log(getPost());
  const getPostData = async () => {
    const res = await getPost();
    console.log(res.data);
    // const data = res.json();
    // console.log(data);
    setUserInfo(res.data);
  };
  useEffect(() => {
    getPostData();
  }, []);
  return (
    <>
      <div class="relative w-[90%] md:w-[80%] mx-auto mt-20 overflow-x-auto">
        <h1 className="text-center font-[700] text-black text-[20px] mb-10">
          User info
        </h1>
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-1 md:px-6 py-3">
                id
              </th>
              <th scope="col" class="px-1 md:px-6 py-3">
                title
              </th>
              <th scope="col" class="px-1 md:px-6 py-3">
                body
              </th>
              {/* <th scope="col" class="px-6 py-3">
                Price
              </th> */}
            </tr>
          </thead>
          <tbody>
            {/* <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Apple MacBook Pro 17"
              </th>
              <td class="px-6 py-4">Silver</td>
              <td class="px-6 py-4">Laptop</td>
              <td class="px-6 py-4">$2999</td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Microsoft Surface Pro
              </th>
              <td class="px-6 py-4">White</td>
              <td class="px-6 py-4">Laptop PC</td>
              <td class="px-6 py-4">$1999</td>
            </tr>
            <tr class="bg-white dark:bg-gray-800">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Magic Mouse 2
              </th>
              <td class="px-6 py-4">Black</td>
              <td class="px-6 py-4">Accessories</td>
              <td class="px-6 py-4">$99</td>
            </tr> */}

            {userInfo &&
              userInfo.map((data, id) => (
                <>
                  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th
                      scope="row"
                      class="px-1 md:px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {data?.id}
                    </th>
                    <td class="px-1 md:px-6  py-4">{data?.title}</td>
                    <td class="px-1 md:px-6  py-4">{data?.body}</td>
                    {/* <td class="px-6 py-4">$2999</td> */}
                  </tr>
                </>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default JsonPlaceholder;
