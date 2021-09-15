import BASE_URL from './constants';

const checkRes = (res) => (res.ok
  ? res.json()
  : res.json().then((resJson) => Promise.reject(new Error(resJson))));

export const getEventsReq = () => fetch(`${BASE_URL}/events`).then((res) => checkRes(res));

export const postEventReq = ({
  title,
  date,
  unread,
}) => fetch(`${BASE_URL}/events`, {
  method: 'POST',
  headers: {
    'content-type': 'application/json',
  },
  body: JSON.stringify({
    title,
    date,
    unread,
  }),
}).then((res) => checkRes(res));

// export const updateUserReq = ({
//   id,
//   surname,
//   name,
//   middleName,
//   birthday,
//   birthPlace,
//   email,
//   roleId,
//   phoneNumber,
//   registerDate,
//   lastUpdate,
// }) => fetch(`${BASE_URL}/users/${id}`, {
//   method: 'PUT',
//   headers: {
//     'content-type': 'application/json',
//   },
//   body: JSON.stringify({
//     surname,
//     name,
//     middleName,
//     birthday,
//     birthPlace,
//     email,
//     roleId,
//     phoneNumber,
//     registerDate,
//     lastUpdate,
//   }),
// }).then((res) => checkRes(res));

// export const deleteUserReq = ({ id }) => fetch(`${BASE_URL}/users/${id}`, {
//   method: 'DELETE',
// }).then((res) => checkRes(res));
