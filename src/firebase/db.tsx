import { db } from './firebase';
// import firebase from 'firebase';

export const _saveUserProfile = ( q, a, b ) => {
  // const id = db.ref(`users`).push();
  // const key = id.key;
  db.ref(`users/${q}`).update({
    _id: q,
    email: a,
    role: 'user',
    userTerms: 'nok',
    namaLengkap: b,
    handphone: '',
    alamat: '',
    saldoDeposit: '0',
    statusDeposit: 'OK',
    requestVisit: 'Idle',
    userAvatar: 'https://bootdey.com/img/Content/avatar/avatar1.png',
    statusPasien: 'BPJS',
    nomorAntrian: 'NA',
    tanggalBooking: 'NA',
    flagActivity: 'userIdle',
  });
};
