import React, { useState, useEffect } from 'react';

const MahasiswaData = [
    { name: "Randy Aulia Ananda Ruslani", role: "Ketua Kelas" },
    { name: "Muhammad Rizki Awaluddin Mubin",  role: "Wakil" },
    { name: "Chairania Jasmine Bambang", role: "PJ Matkul" },
    { name: "Handika Nur'Aziz", role: "PJ Matkul" },
    { name: "Juan Graciano", role: "PJ Matkul" },
    { name: "Kasamira Anindita Qairia", role: "PJ Matkul" },
    { name: "Muhammad Fauzan Permana", role: "PJ Matkul" },
    { name: "Muhammad Nur Irfan", role: "PJ Matkul" },
    { name: "Muhammad Rachmadhani Kurniawan", role: "PJ Matkul" },
    { name: "Naura Mufidah", role: "PJ Matkul" },
    { name: "Nurul Hasanah", role: "PJ Matkul" },
    { name: "Putra Fajar Ramadhan", role: "PJ Matkul" },
    { name: "Adimas Farhan Putranto",  role: "Anggota" },
    { name: "Ahmad Ulul Azmi",  role: "Anggota" },
    { name: "Akmal Nur Wahid",  role: "Anggota" },
    { name: "Allia Chyanda Putri",  role: "Anggota" },
    { name: "Deva Alvyn Budinugraha",  role: "Anggota" },
    { name: "Dzaky Naufal Asadel",  role: "Anggota" },
    { name: "Fariz Haidar Zhaffran",  role: "Anggota" },
    { name: "Ghavio Rizky Ananda",  role: "Anggota" },
    { name: "Muhamad Adnan Fadillah",  role: "Anggota" },
    { name: "Muhammad Bintang Ramadhan",  role: "Anggota" },
    { name: "Muhammad Fadhil Dumbi",  role: "Anggota" },
    { name: "Muhammad Reza Harsono",  role: "Anggota" },
    { name: "Muhammad Rizky Ramadhani",  role: "Anggota" },
    { name: "Rafii Anindito",  role: "Anggota" },
    { name: "Salma Kamila",  role: "Anggota" },
    { name: "Tarissa Azzahra Danantya",  role: "Anggota" },
    { name: "Teuku Rafli Fahrezy",  role: "Anggota" },
    { name: "Zakirio Hugoraazaq Wasis",  role: "Anggota" },
];

const MahasiswaList = ({ data }) => (
    <div className="mx-auto px-4">
        <ul className="divide-y divide-gray-100">
            {data.map((mahasiswa, index) => (
                <li
                    key={mahasiswa.email}
                    className={`flex justify-between gap-x-6 py-5 shadow-lg animate-[animasi_2.${index}s_ease-in-out]`}
                >
                    <div className="flex flex-wrap w-full justify-center items-center mx-5">
                        <img
                            className="w-28 flex-none rounded-full bg-gray-50"
                            src="https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg"
                            alt=""
                        />
                        <div className="flex-auto w-64 mx-5 max-[478px]:text-center">
                            <p className="text-md font-semibold leading-6 text-gray-900">
                                {mahasiswa.name}
                            </p>
                            <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                                {mahasiswa.name
                                .toLowerCase() // Mengubah ke huruf kecil
                                .split(" ") // Memisahkan kata menjadi array
                                .join(".") // Mengganti spasi dengan titik
                                .concat(".tik22@mhsw.pnj.ac.id")}
                            </p>
                        </div>
                        <div className="w-40 max-[640px]:text-center max-[640px]:w-full">
                            <p className="text-sm leading-6 text-gray-900">{mahasiswa.role}</p>
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    </div>
);

const App = () => {
    const [sortedData, setSortedData] = useState([]);

    useEffect(() => {
        const roleOrder = ['Ketua Kelas', 'Wakil','PJ Matkul', 'Anggota'];

        const sortedMahasiswa = [...MahasiswaData].sort((a, b) => {
            const roleA = roleOrder.indexOf(a.role);
            const roleB = roleOrder.indexOf(b.role);
            return roleA - roleB;
        });

        setSortedData(sortedMahasiswa);
    }, []);

    return (
        <div className="mx-10 py-10">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">Mahasiswa</h2>
            <MahasiswaList data={sortedData} />
        </div>
    );
};

export default App;
