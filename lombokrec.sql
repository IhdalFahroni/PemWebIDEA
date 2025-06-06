-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 06 Jun 2025 pada 18.04
-- Versi server: 10.4.32-MariaDB
-- Versi PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `lombokrec`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `akun`
--

CREATE TABLE `akun` (
  `ID_akun` int(11) NOT NULL,
  `username` varchar(20) NOT NULL,
  `password` varchar(20) NOT NULL,
  `email` varchar(100) NOT NULL,
  `nama_depan` tinytext NOT NULL,
  `nama_belakang` tinytext NOT NULL,
  `is_pemilik` tinyint(1) NOT NULL,
  `is_admin` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `form_klaim`
--

CREATE TABLE `form_klaim` (
  `ID_formKlaim` int(11) NOT NULL,
  `ID_akun` int(11) NOT NULL,
  `nama_lengkap` tinytext NOT NULL,
  `no_hp` varchar(15) NOT NULL,
  `npwp` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `dokumen_pendukung` varchar(100) NOT NULL,
  `is_verified` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `form_pengajuantempat`
--

CREATE TABLE `form_pengajuantempat` (
  `ID_formPengajuanTempat` int(11) NOT NULL,
  `ID_akun` int(11) NOT NULL,
  `nama_tempat` varchar(255) NOT NULL,
  `kabupatan_kota` enum('mataram','lombok_barat','lombok_tengah','lombok_timur','lombok_utara') NOT NULL,
  `kecamatan` varchar(255) NOT NULL,
  `kelurahan` varchar(255) NOT NULL,
  `nama_jalan` varchar(255) NOT NULL,
  `kategori` enum('tourist_destination','culinary') NOT NULL,
  `foto` varchar(255) NOT NULL,
  `deskripsi` varchar(500) NOT NULL,
  `google_maps` varchar(255) NOT NULL,
  `is_verified` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `menu`
--

CREATE TABLE `menu` (
  `ID_menu` int(11) NOT NULL,
  `ID_tempat` int(11) NOT NULL,
  `nama_menu` varchar(255) NOT NULL,
  `deskripsi_menu` varchar(500) NOT NULL,
  `harga_menu` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `notifikasi`
--

CREATE TABLE `notifikasi` (
  `ID_notif` int(11) NOT NULL,
  `ID_akun` int(11) NOT NULL,
  `header` varchar(255) NOT NULL,
  `isi_notif` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `promo`
--

CREATE TABLE `promo` (
  `ID_promo` int(11) NOT NULL,
  `ID_tempat` int(11) NOT NULL,
  `nama_promo` varchar(255) NOT NULL,
  `deskripsi_promo` varchar(255) NOT NULL,
  `valid_until` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `review`
--

CREATE TABLE `review` (
  `ID_review` int(11) NOT NULL,
  `ID_akun` int(11) NOT NULL,
  `ID_tempat` int(11) NOT NULL,
  `komentar` varchar(255) NOT NULL,
  `rating` int(1) NOT NULL,
  `foto` varchar(255) NOT NULL,
  `waktu` time NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `tempat`
--

CREATE TABLE `tempat` (
  `ID_tempat` int(11) NOT NULL,
  `nama_tempat` varchar(100) NOT NULL,
  `kabupaten_kota` varchar(100) NOT NULL,
  `kecamatan` varchar(100) NOT NULL,
  `kelurahan` varchar(100) NOT NULL,
  `nama_jalan` varchar(250) NOT NULL,
  `kategori` enum('Tempat Wisata','Tempat Kuliner') NOT NULL,
  `deskripsi` varchar(500) NOT NULL,
  `foto` varchar(255) NOT NULL,
  `google_maps` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `tempat_kuliner`
--

CREATE TABLE `tempat_kuliner` (
  `ID_tempat` int(11) NOT NULL,
  `ID_akun` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `tempat_wisata`
--

CREATE TABLE `tempat_wisata` (
  `ID_tempat` int(11) NOT NULL,
  `harga_tiket` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `akun`
--
ALTER TABLE `akun`
  ADD PRIMARY KEY (`ID_akun`);

--
-- Indeks untuk tabel `form_klaim`
--
ALTER TABLE `form_klaim`
  ADD PRIMARY KEY (`ID_formKlaim`),
  ADD KEY `form_klaim_ibfk_1` (`ID_akun`);

--
-- Indeks untuk tabel `form_pengajuantempat`
--
ALTER TABLE `form_pengajuantempat`
  ADD PRIMARY KEY (`ID_formPengajuanTempat`),
  ADD KEY `form_pengajuantempat_ibfk_1` (`ID_akun`);

--
-- Indeks untuk tabel `menu`
--
ALTER TABLE `menu`
  ADD PRIMARY KEY (`ID_menu`),
  ADD KEY `ID_tempat` (`ID_tempat`);

--
-- Indeks untuk tabel `notifikasi`
--
ALTER TABLE `notifikasi`
  ADD PRIMARY KEY (`ID_notif`),
  ADD KEY `ID_akun` (`ID_akun`);

--
-- Indeks untuk tabel `promo`
--
ALTER TABLE `promo`
  ADD PRIMARY KEY (`ID_promo`),
  ADD KEY `promo_ibfk_1` (`ID_tempat`);

--
-- Indeks untuk tabel `review`
--
ALTER TABLE `review`
  ADD PRIMARY KEY (`ID_review`),
  ADD KEY `review_ibfk_1` (`ID_akun`),
  ADD KEY `ID_tempat` (`ID_tempat`);

--
-- Indeks untuk tabel `tempat`
--
ALTER TABLE `tempat`
  ADD PRIMARY KEY (`ID_tempat`);

--
-- Indeks untuk tabel `tempat_kuliner`
--
ALTER TABLE `tempat_kuliner`
  ADD KEY `ID_akun` (`ID_akun`),
  ADD KEY `ID_tempat` (`ID_tempat`);

--
-- Indeks untuk tabel `tempat_wisata`
--
ALTER TABLE `tempat_wisata`
  ADD KEY `ID_tempat` (`ID_tempat`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `akun`
--
ALTER TABLE `akun`
  MODIFY `ID_akun` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `form_klaim`
--
ALTER TABLE `form_klaim`
  MODIFY `ID_formKlaim` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `form_pengajuantempat`
--
ALTER TABLE `form_pengajuantempat`
  MODIFY `ID_formPengajuanTempat` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `menu`
--
ALTER TABLE `menu`
  MODIFY `ID_menu` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `notifikasi`
--
ALTER TABLE `notifikasi`
  MODIFY `ID_notif` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `promo`
--
ALTER TABLE `promo`
  MODIFY `ID_promo` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `review`
--
ALTER TABLE `review`
  MODIFY `ID_review` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `tempat`
--
ALTER TABLE `tempat`
  MODIFY `ID_tempat` int(11) NOT NULL AUTO_INCREMENT;

--
-- Ketidakleluasaan untuk tabel pelimpahan (Dumped Tables)
--

--
-- Ketidakleluasaan untuk tabel `form_klaim`
--
ALTER TABLE `form_klaim`
  ADD CONSTRAINT `form_klaim_ibfk_1` FOREIGN KEY (`ID_akun`) REFERENCES `akun` (`ID_akun`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ketidakleluasaan untuk tabel `form_pengajuantempat`
--
ALTER TABLE `form_pengajuantempat`
  ADD CONSTRAINT `form_pengajuantempat_ibfk_1` FOREIGN KEY (`ID_akun`) REFERENCES `akun` (`ID_akun`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ketidakleluasaan untuk tabel `menu`
--
ALTER TABLE `menu`
  ADD CONSTRAINT `menu_ibfk_1` FOREIGN KEY (`ID_tempat`) REFERENCES `tempat` (`ID_tempat`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ketidakleluasaan untuk tabel `notifikasi`
--
ALTER TABLE `notifikasi`
  ADD CONSTRAINT `notifikasi_ibfk_1` FOREIGN KEY (`ID_akun`) REFERENCES `akun` (`ID_akun`);

--
-- Ketidakleluasaan untuk tabel `promo`
--
ALTER TABLE `promo`
  ADD CONSTRAINT `promo_ibfk_1` FOREIGN KEY (`ID_tempat`) REFERENCES `tempat` (`ID_tempat`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ketidakleluasaan untuk tabel `review`
--
ALTER TABLE `review`
  ADD CONSTRAINT `review_ibfk_1` FOREIGN KEY (`ID_akun`) REFERENCES `akun` (`ID_akun`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `review_ibfk_2` FOREIGN KEY (`ID_tempat`) REFERENCES `tempat` (`ID_tempat`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ketidakleluasaan untuk tabel `tempat_kuliner`
--
ALTER TABLE `tempat_kuliner`
  ADD CONSTRAINT `tempat_kuliner_ibfk_1` FOREIGN KEY (`ID_akun`) REFERENCES `akun` (`ID_akun`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `tempat_kuliner_ibfk_2` FOREIGN KEY (`ID_tempat`) REFERENCES `tempat` (`ID_tempat`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ketidakleluasaan untuk tabel `tempat_wisata`
--
ALTER TABLE `tempat_wisata`
  ADD CONSTRAINT `tempat_wisata_ibfk_1` FOREIGN KEY (`ID_tempat`) REFERENCES `tempat` (`ID_tempat`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
