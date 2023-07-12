import React, { Component } from "react";
import Slider from "react-slick";

const MahasiswaData = [
    { name: "Randy Aulia Ananda Ruslani", role: "Ketua Kelas", quotes: "Kita tidak akan pernah berhenti belajar, karna sejatinya kehidupan ini adalah pelajaran bagi mereka yang merenung" },
    { name: "Muhammad Rizki Awaluddin Mubin", role: "Wakil", quotes: "Ga nyangka tahun 2023 bisa nonton MPL dengan tiket gratis dan bisa ketemu foto ama artis" },
    { name: "Chairania Jasmine Bambang", role: "PJ Matkul", quotes: "Halooo saya Rani pacarnya Renjun 🫶🏻" },
    { name: "Handika Nur'Aziz", role: "PJ Matkul", quotes: "send help" },
    { name: "Juan Graciano", role: "PJ Matkul", quotes: "jangan pernah membalas pesan line dari temanmu, biarlah karma yg membalasnya" },
    { name: "Kasamira Anindita Qairia", role: "PJ Matkul", quotes: "Jangan ajarin aku sabar, aku ga sabaran soalnya" },
    { name: "Muhammad Fauzan Permana", role: "PJ Matkul", quotes: "Lewatilah tiap detik dengan bernapas, biar ga membuat kerumunan orang" },
    { name: "Muhammad Nur Irfan", role: "PJ Matkul", quotes: "Masa depan kadang nggak secerah flash gapio" },
    { name: "Muhammad Rachmadhani Kurniawan", role: "PJ Matkul", quotes: "lemme tell u the name of the months, january february march april may u be mine? " },
    { name: "Naura Mufidah", role: "PJ Matkul", quotes: "Baper kok sama air" },
    { name: "Nurul Hasanah", role: "PJ Matkul", quotes: "the effort will not betray result" },
    { name: "Putra Fajar Ramadhan", role: "PJ Matkul", quotes: "kampus selalu di hati, karna yang di hati ada di kampus" },
    { name: "Adimas Farhan Putranto", role: "Anggota", quotes: "Buah jatuh jauh pohonnya engga" },
    { name: "Ahmad Ulul Azmi", role: "Anggota", quotes: "'... dan jangan kamu berputus asa dari rahmat Allah ...' Q.S. Yusuf : 87" },
    { name: "Akmal Nur Wahid", role: "Anggota", quotes: "takut tambah dewasa,takut aku kecewa takut tak seindah yang kukira" },
    { name: "Allia Chyanda Putri", role: "Anggota", quotes: "kukira kupu kupu adalah hewan, ternyata itu aku :)" },
    { name: "Deva Alvyn Budinugraha", role: "Anggota", quotes: "If you ever feel like you're such a fool, look at me. You're not as stupid as I am, who can't stop thinking about one girl every single day for years." },
    { name: "Fariz Haidar Zhaffran", role: "Anggota", quotes: "Dikasih cobaan malah dicobain" },
    { name: "Ghavio Rizky Ananda", role: "Anggota", quotes: "sekali dua kali gapapa, tapi kalo tiga kali empat itu dua belas" },
    { name: "Muhamad Adnan Fadillah", role: "Anggota", quotes: "fadhil is the most dangerous person" },
    { name: "Muhammad Bintang Ramadhan", role: "Anggota", quotes: "" },
    { name: "Muhammad Dzaky Naufal Asadel", role: "Anggota", quotes: "keep moving forward" },
    { name: "Muhammad Fadhil Dumbi", role: "Anggota", quotes: "Violence is never the answer. It is a question, and the answer is obviously yes." },
    { name: "Muhammad Reza Harsono", role: "Anggota", quotes: "[sluurrrpp]" },
    { name: "Muhammad Rizky Ramadhani", role: "Anggota", quotes: "Ingat, waktu terus berjalan, Anda tidak abadi, tapi silahkan lanjut ngegim lagi" },
    { name: "Rafii Anindito", role: "Anggota", quotes: "Lookin for a song in everthing i meet" },
    { name: "Salma Kamila", role: "Anggota", quotes: "mang eak aja nin 😎🤟🏻" },
    { name: "Tarissa Azzahra Danantya", role: "Anggota", quotes: "Guys, life is 80% suffering 20% happiness" },
    { name: "Teuku Rafli Fahrezy", role: "Anggota", quotes: "Uang bisa dicari, barang limited punah menyesal" },
    { name: "Zakirio Hugoraazaq Wasis", role: "Anggota", quotes: "If I had a move for every existing genders in this universe in an online match of chess, I'd have two brilliant moves ten dozen blunders." },
];

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "red" }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "green" }}
            onClick={onClick}
        />
    );
}

export default class CustomArrows extends Component {
    render() {
        const settings = {
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        infinite: true,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        initialSlide: 2
                    }
                }
            ]
        };

        let domain = window.location.hostname;

        if (domain === "localhost") {
            domain = "localhost:3000";
        }
        return (
            <div className="w-full h-screen flex justify-center items-center">
                <div className="w-1/2 relative">
                    <h2>Custom Arrows</h2>
                    <Slider {...settings}>
                        {MahasiswaData.map((mahasiswa) => (
                            <div className="shadow-md p-5 rounded-md mb-5 h-[27rem] max-[600px]:h-52">
                                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden bg-gray-200 lg:aspect-none h-52 rounded-xl">
                                    <img
                                        src={`http://${domain}/Foto/${mahasiswa.name}.jpg`}
                                        alt=""
                                        className="h-full w-full object-cover object-center"
                                    />
                                </div>
                                <h4 className="text-sm font-bold mt-2">
                                    {mahasiswa.name}
                                </h4>
                                <div className="flex items-center">
                                    <p className="text-sm text-center mt-2 bottom-0">
                                        <i>"{mahasiswa.quotes}"</i>
                                    </p>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        );
    }
}