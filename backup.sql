--
-- PostgreSQL database dump
--

-- Dumped from database version 16.3 (Debian 16.3-1.pgdg120+1)
-- Dumped by pg_dump version 16.3 (Debian 16.3-1.pgdg120+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: Attachment; Type: TABLE; Schema: public; Owner: lms
--

CREATE TABLE public."Attachment" (
    id text NOT NULL,
    name text NOT NULL,
    url text NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL,
    "courseId" text NOT NULL
);


ALTER TABLE public."Attachment" OWNER TO lms;

--
-- Name: Category; Type: TABLE; Schema: public; Owner: lms
--

CREATE TABLE public."Category" (
    id text NOT NULL,
    name text NOT NULL
);


ALTER TABLE public."Category" OWNER TO lms;

--
-- Name: Chapter; Type: TABLE; Schema: public; Owner: lms
--

CREATE TABLE public."Chapter" (
    id text NOT NULL,
    title text NOT NULL,
    description text,
    "videoUrl" text,
    "position" integer NOT NULL,
    "isPublished" boolean DEFAULT false NOT NULL,
    "isFree" boolean DEFAULT false NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL,
    "courseId" text NOT NULL
);


ALTER TABLE public."Chapter" OWNER TO lms;

--
-- Name: Course; Type: TABLE; Schema: public; Owner: lms
--

CREATE TABLE public."Course" (
    id text NOT NULL,
    "userId" text NOT NULL,
    title text NOT NULL,
    description text,
    "imageUrl" text,
    price double precision,
    "isPublished" boolean DEFAULT false NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL,
    "categoryId" text
);


ALTER TABLE public."Course" OWNER TO lms;

--
-- Name: MuxData; Type: TABLE; Schema: public; Owner: lms
--

CREATE TABLE public."MuxData" (
    id text NOT NULL,
    "assetId" text NOT NULL,
    "playbackId" text,
    "chapterId" text NOT NULL
);


ALTER TABLE public."MuxData" OWNER TO lms;

--
-- Name: Purchase; Type: TABLE; Schema: public; Owner: lms
--

CREATE TABLE public."Purchase" (
    id text NOT NULL,
    "userId" text NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL,
    "courseId" text NOT NULL
);


ALTER TABLE public."Purchase" OWNER TO lms;

--
-- Name: StripeCustomer; Type: TABLE; Schema: public; Owner: lms
--

CREATE TABLE public."StripeCustomer" (
    id text NOT NULL,
    "userId" text NOT NULL,
    "stripeCustomerId" text NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL
);


ALTER TABLE public."StripeCustomer" OWNER TO lms;

--
-- Name: UserProgress; Type: TABLE; Schema: public; Owner: lms
--

CREATE TABLE public."UserProgress" (
    id text NOT NULL,
    "userId" text NOT NULL,
    "isCompleted" boolean DEFAULT false NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL,
    "chapterId" text NOT NULL
);


ALTER TABLE public."UserProgress" OWNER TO lms;

--
-- Data for Name: Attachment; Type: TABLE DATA; Schema: public; Owner: lms
--

COPY public."Attachment" (id, name, url, "createdAt", "updatedAt", "courseId") FROM stdin;
a02315ca-3383-4c5a-9baf-daaddb3bcd69	dc697801-a439-4f57-bd8d-ba68756e90e8-h9c2we.png	https://utfs.io/f/dc697801-a439-4f57-bd8d-ba68756e90e8-h9c2we.png	2024-08-12 22:02:34.131	2024-08-12 22:02:34.131	68d2db82-f111-49a3-9879-2ba71e65bdef
209fef68-00c6-49aa-80dc-41b80a6b89c1	0968e3f8-e38b-4251-87c9-e7acbc8a3b7a-j6eg5v.pdf	https://utfs.io/f/0968e3f8-e38b-4251-87c9-e7acbc8a3b7a-j6eg5v.pdf	2024-08-12 23:12:50.218	2024-08-12 23:12:50.218	68d2db82-f111-49a3-9879-2ba71e65bdef
fe9d02ca-96b3-42af-a439-32d3d361284c	7ccdad8d-02a0-4279-9915-b7ce54ecb861-jlo1ag.jpeg	https://utfs.io/f/7ccdad8d-02a0-4279-9915-b7ce54ecb861-jlo1ag.jpeg	2024-08-13 22:41:04.461	2024-08-13 22:41:04.461	f6901673-2b69-42c6-935e-27d8d161ebd2
7509564b-91ff-4324-b7ff-e2e65f6b8895	1014973d-3bbc-4f87-aa59-0e5c966df289-giqjat.pdf	https://utfs.io/f/1014973d-3bbc-4f87-aa59-0e5c966df289-giqjat.pdf	2024-08-16 15:22:19.465	2024-08-16 15:22:19.465	f6901673-2b69-42c6-935e-27d8d161ebd2
acd5914f-c2c9-43f6-b187-7d130ffa4716	f280ec99-52d2-4879-9ea9-a42f6324646e-z3k156.txt	https://utfs.io/f/f280ec99-52d2-4879-9ea9-a42f6324646e-z3k156.txt	2024-08-16 19:17:19.82	2024-08-16 19:17:19.82	f6901673-2b69-42c6-935e-27d8d161ebd2
0e1000c1-d141-4131-9c39-31cc30825175	50863b7e-fdad-4b48-b8af-72961950bb31-nlisfc.jpeg	https://utfs.io/f/50863b7e-fdad-4b48-b8af-72961950bb31-nlisfc.jpeg	2024-08-18 14:56:53.794	2024-08-18 14:56:53.794	5fb1c3b8-2a16-4b00-8b62-01bcde45f892
\.


--
-- Data for Name: Category; Type: TABLE DATA; Schema: public; Owner: lms
--

COPY public."Category" (id, name) FROM stdin;
e9c55445-5fad-432e-a7ba-7204ec85111f	Computer Science
f52f9077-1693-4393-9dae-5ace5b26f2c6	Music
92201721-5d65-4fea-953e-0b18934f439f	Fitness
43f4b859-61c8-4ff6-9cc1-fdbf967a0f9a	Photography
924aa692-16eb-4b51-bbb4-8a1dd8840152	Accounting
226ee7a6-74b5-4a9d-903d-29b15e638f8e	Engineering
d3a43699-944f-43e4-a202-fa824295e3ec	Filming
\.


--
-- Data for Name: Chapter; Type: TABLE DATA; Schema: public; Owner: lms
--

COPY public."Chapter" (id, title, description, "videoUrl", "position", "isPublished", "isFree", "createdAt", "updatedAt", "courseId") FROM stdin;
be672c81-bf83-4ca1-8d79-7c5ddc7e3da9	Referências	<p><span style="background-color: rgb(241, 245, 249); color: rgb(2, 8, 23);">Chapter title - Referências</span></p>	https://utfs.io/f/cb484678-c299-4316-8bb3-4b9008fe3077-mwb2b2.mp4	4	t	t	2024-08-16 15:23:00.087	2024-08-16 19:15:55.767	f6901673-2b69-42c6-935e-27d8d161ebd2
a3c71e87-24b9-4ee1-991c-c69d490accf1	Introdução	<p>Modelo de <strong>Chapter Description</strong></p>	https://utfs.io/f/fee24f95-53f5-4ab0-a21e-9038d8002b54-mwb2b2.mp4	1	t	t	2024-08-18 14:56:08.082	2024-08-18 14:58:06.667	5fb1c3b8-2a16-4b00-8b62-01bcde45f892
e8a0dce8-ec45-4563-9769-391f5689538a	Desenvolvimento	<p><strong style="background-color: rgb(241, 245, 249); color: rgb(2, 8, 23);">Desenvolvimento</strong></p>	https://utfs.io/f/61ec0706-844e-457b-b479-797d0bf939db-mwb2b2.mp4	2	t	f	2024-08-14 11:37:56.227	2024-08-16 15:25:13.482	68d2db82-f111-49a3-9879-2ba71e65bdef
c172f83c-124d-4168-a678-696da9dced68	Referências	\N	\N	4	f	f	2024-08-18 14:58:30.208	2024-08-18 14:58:30.208	5fb1c3b8-2a16-4b00-8b62-01bcde45f892
5118dd9b-21f6-46ad-a4c5-cdff5798a7a1	Introdução	<p><span style="background-color: rgb(241, 245, 249); color: rgb(2, 8, 23);">Chapter Creation is Introdução</span></p>	https://utfs.io/f/e4031460-5afa-4e7e-9642-e766e92b2ca2-mwb2b2.mp4	1	t	t	2024-08-14 14:56:34.273	2024-08-14 15:02:38.494	68d2db82-f111-49a3-9879-2ba71e65bdef
be4b5098-d5a5-47d3-9bed-3755e42a6716	Desernvolvimento	<p>Modelo de Chapter description - Desenvolvimento</p>	https://utfs.io/f/ad2ac9a6-15dd-4535-a431-e7994f9ee076-mwb2b2.mp4	2	t	f	2024-08-18 14:56:22.501	2024-08-18 14:59:24.546	5fb1c3b8-2a16-4b00-8b62-01bcde45f892
85f2baee-783d-4d8e-8dd6-9e6b2ef78d29	Referências	\N	\N	3	f	f	2024-08-14 11:38:06.858	2024-08-14 15:02:38.497	68d2db82-f111-49a3-9879-2ba71e65bdef
12286042-ee13-47dd-9970-9c603636f4e8	Conclusão	\N	\N	4	f	f	2024-08-14 11:38:13.637	2024-08-14 15:02:38.498	68d2db82-f111-49a3-9879-2ba71e65bdef
eaffad44-edbb-4818-9941-d898454a701c	Conclusão	<p><span style="color: rgb(2, 8, 23);">Modelo de Chapter description - </span><strong style="color: rgb(2, 8, 23);">Conclusão</strong></p>	https://utfs.io/f/96677f8d-407d-427c-9a0d-fc9ef0d7c83f-mwb2b2.mp4	3	t	f	2024-08-18 14:58:22.551	2024-08-18 15:00:17.696	5fb1c3b8-2a16-4b00-8b62-01bcde45f892
935beeab-44b4-4e47-99c1-111e00f43c4b	Desenvolvimento	<p>Exemplo de uso de <span style="background-color: rgb(241, 245, 249); color: rgb(2, 8, 23);">description</span></p>	https://utfs.io/f/e038122c-cc3b-47e4-9a74-e7ceb92ed541-mwb2b2.mp4	2	t	t	2024-08-16 15:22:48.781	2024-08-16 19:15:37.915	f6901673-2b69-42c6-935e-27d8d161ebd2
5a5eaea8-5419-4826-9f3c-cc3fd7ef636a	Sem conteúdo	<p><span style="background-color: rgb(241, 245, 249); color: rgb(2, 8, 23);">Sem conteúdo</span></p>	https://utfs.io/f/6c12d0b3-ffc3-4452-b03c-1489adadbf13-mwb2b2.mp4	5	f	f	2024-08-12 22:00:46.647	2024-08-14 15:02:44.498	68d2db82-f111-49a3-9879-2ba71e65bdef
afd7fe41-ad3a-4d35-b005-d7147ba28fca	Introdução	<p>Chapter is <span style="background-color: rgb(241, 245, 249); color: rgb(2, 8, 23);">Introdução</span></p>	https://utfs.io/f/18b08384-8cd1-41a1-a2b8-6b86ca57325e-mwb2b2.mp4	1	t	t	2024-08-13 22:40:40.293	2024-08-16 15:23:16.038	f6901673-2b69-42c6-935e-27d8d161ebd2
5af63067-7fb3-4cde-a132-c243a3e1e066	Conclusão	<p><span style="background-color: rgb(241, 245, 249); color: rgb(2, 8, 23);">Chapter description - Conclusão</span></p>	https://utfs.io/f/2b439470-e89a-468a-be83-6738064acee5-mwb2b2.mp4	3	t	t	2024-08-16 15:23:13.051	2024-08-16 19:15:47.323	f6901673-2b69-42c6-935e-27d8d161ebd2
\.


--
-- Data for Name: Course; Type: TABLE DATA; Schema: public; Owner: lms
--

COPY public."Course" (id, "userId", title, description, "imageUrl", price, "isPublished", "createdAt", "updatedAt", "categoryId") FROM stdin;
f6901673-2b69-42c6-935e-27d8d161ebd2	user_2kWAwhG54GLfJNmCiwC7TlAwPKt	K8S - Iniciante	K8S - Iniciante	https://utfs.io/f/92f05925-61ee-439b-9877-9cbb465a40a1-jlo1ag.jpeg	19.99	t	2024-08-13 22:39:10.849	2024-08-16 19:17:39.139	e9c55445-5fad-432e-a7ba-7204ec85111f
5fb1c3b8-2a16-4b00-8b62-01bcde45f892	user_2kWAwhG54GLfJNmCiwC7TlAwPKt	Docker para Iniciantes	Docker para Iniciantes	https://utfs.io/f/1f2acc67-aa77-447b-9214-40f981a201dd-3nbam3.jpg	9.99	t	2024-08-18 14:51:49.204	2024-08-18 15:00:28.083	e9c55445-5fad-432e-a7ba-7204ec85111f
68d2db82-f111-49a3-9879-2ba71e65bdef	user_2kWAwhG54GLfJNmCiwC7TlAwPKt	DevOps - Iniciante	DevOps - Iniciante\nDevOps - Iniciante	https://utfs.io/f/e9f40f0f-6142-4f6e-bd8e-a05600976eaf-wbtm3.jpeg	9.99	t	2024-08-12 21:59:38.363	2024-08-13 22:11:27.917	e9c55445-5fad-432e-a7ba-7204ec85111f
\.


--
-- Data for Name: MuxData; Type: TABLE DATA; Schema: public; Owner: lms
--

COPY public."MuxData" (id, "assetId", "playbackId", "chapterId") FROM stdin;
34d5e9c3-5b33-4a8f-9534-2e5addd00a53	jPfviyN0001OEZFvvZfPVoNoqOYXQntSrwL6CUrzpxfXk	lddSU9V4ngtc6KZ87we72PEIWZjCjXZwcFN01sk2Apys	5a5eaea8-5419-4826-9f3c-cc3fd7ef636a
84285793-fdaf-4921-9479-e32b28a2a35f	Pq8PvUY8As81YbeFCSf8Kbb1IFepkktnzNed7YaN5Z4	GcOjf8zRQr6MpHdIK34rwGsciv3gFI101YyZHweOETgM	afd7fe41-ad3a-4d35-b005-d7147ba28fca
2716922a-5cad-4c0d-b4d2-ef2cc001e2cb	H5urH02inV02lXAQYhq94wTc135rvUfvI012JhtRB9NXwU	rsxUhxMusXAJtuLCgacCHRJbPDVO1VLYT01sg1mhQPSU	e8a0dce8-ec45-4563-9769-391f5689538a
c2a8007b-f0c8-4618-ab79-b92e7feffac3	43wy7Mzh19U4vEw18PbP4uDpJyzJChj1TQcE7FGdCe4	M00vW9t01U5obo00RyNE3p02mnzcVkGUz9T3iKB9BW02s8Yw	5118dd9b-21f6-46ad-a4c5-cdff5798a7a1
63b43f2f-a343-46ad-bb80-fc2cfa3bae26	01XJJ2bsRWppFR4wpwB9pE2MCOMvsEvpYpKTnDLXr00Ro	Ia5cZZJWI4dHAA8DlR3cz6hLlfY5FLF9tUY00kG9RG4A	935beeab-44b4-4e47-99c1-111e00f43c4b
5778d1ed-f4c5-4528-80ef-a64f0a5034fe	nu02cvq02X14YYeKUYdar1GhJLBe5Vr28w02fH65uUpYoA	ulIm5lH003sTXg59dBTRIZSiPov801iji63cKkF52jiGw	5af63067-7fb3-4cde-a132-c243a3e1e066
2ecc0788-804a-45e4-8c52-43561a14bb9f	cgxlTLWRM4ASvRglrwtgMkZ5qauKDMH7mqzgqcBETwQ	PNAW5mnRhq00AnSd36YiCp7VIzUHBA02HmtjxAZy98ncw	be672c81-bf83-4ca1-8d79-7c5ddc7e3da9
6f50147c-5974-4377-8944-bdebb770880d	00oBhf2RKmg6yRSm3gJ7MZZqiu902dNHEz00MVPCY9A6Iw	RpuY7gf4HsdHDaiLzonOH6mj4ILy2gv5nVnVzugr01wk	a3c71e87-24b9-4ee1-991c-c69d490accf1
dac07426-c4e9-4041-9d55-7438dafab734	ycruNvL1jB1uyZQwcI5VwFhZwszC01WmH2zf5knOTvFA	s01ekOuocRWE00A72fsn7PsLVhliNhzRC6k5LN01coNxqI	be4b5098-d5a5-47d3-9bed-3755e42a6716
5a21a16d-0d0f-44c0-b52e-624bbec00610	XvJKtHf5muI900MCuoM7Oo85VtCTIxvaODEX016SsbcQk	lWRo59t8MC3PzIwzIPqRVSd402Yzx67Urlgzb02W1rbiU	eaffad44-edbb-4818-9941-d898454a701c
\.


--
-- Data for Name: Purchase; Type: TABLE DATA; Schema: public; Owner: lms
--

COPY public."Purchase" (id, "userId", "createdAt", "updatedAt", "courseId") FROM stdin;
6ae8a317-ab16-4e4d-bf9e-38ce84b19791	user_2kcPX2xqB4NwKSrCXG3dX5Pbfx0	2024-08-16 22:17:44.695	2024-08-16 22:17:44.695	68d2db82-f111-49a3-9879-2ba71e65bdef
5685a2f4-e31f-44ed-8778-a1d05a0a3f48	user_2kcPX2xqB4NwKSrCXG3dX5Pbfx0	2024-08-16 22:20:01.087	2024-08-16 22:20:01.087	f6901673-2b69-42c6-935e-27d8d161ebd2
7b5d5bb2-abdc-4308-b22d-9a15e64c8246	user_2kcPX2xqB4NwKSrCXG3dX5Pbfx0	2024-08-18 15:03:12.651	2024-08-18 15:03:12.651	5fb1c3b8-2a16-4b00-8b62-01bcde45f892
\.


--
-- Data for Name: StripeCustomer; Type: TABLE DATA; Schema: public; Owner: lms
--

COPY public."StripeCustomer" (id, "userId", "stripeCustomerId", "createdAt", "updatedAt") FROM stdin;
47659b97-d97f-47cb-bf6c-c5c60e8c1190	user_2kcPX2xqB4NwKSrCXG3dX5Pbfx0	cus_QfssmXDSd64Kuv	2024-08-16 20:50:28.262	2024-08-16 20:50:28.262
\.


--
-- Data for Name: UserProgress; Type: TABLE DATA; Schema: public; Owner: lms
--

COPY public."UserProgress" (id, "userId", "isCompleted", "createdAt", "updatedAt", "chapterId") FROM stdin;
866476ab-8612-4b62-9c13-44728943e141	user_2kcPX2xqB4NwKSrCXG3dX5Pbfx0	t	2024-08-17 22:53:56.588	2024-08-17 23:21:06.011	afd7fe41-ad3a-4d35-b005-d7147ba28fca
c801b94c-4978-405f-8c5f-16d064ea24c2	user_2kcPX2xqB4NwKSrCXG3dX5Pbfx0	t	2024-08-17 23:20:46.378	2024-08-17 23:25:34.668	935beeab-44b4-4e47-99c1-111e00f43c4b
01baffb5-4b7c-4d9b-8cb2-9212bff703ba	user_2kcPX2xqB4NwKSrCXG3dX5Pbfx0	t	2024-08-17 23:25:49.259	2024-08-17 23:25:49.259	5af63067-7fb3-4cde-a132-c243a3e1e066
fc2311a8-df1a-4523-8e70-ee400daeab12	user_2kcPX2xqB4NwKSrCXG3dX5Pbfx0	t	2024-08-17 22:53:38.148	2024-08-18 00:28:33.214	5118dd9b-21f6-46ad-a4c5-cdff5798a7a1
e8eaf89b-2f0a-44a4-8096-cdd64dd4f9ff	user_2kcPX2xqB4NwKSrCXG3dX5Pbfx0	f	2024-08-17 23:25:56.06	2024-08-18 14:24:22.503	be672c81-bf83-4ca1-8d79-7c5ddc7e3da9
a2e570fe-c595-490a-8b26-83a17fc0de2d	user_2kcPX2xqB4NwKSrCXG3dX5Pbfx0	t	2024-08-18 00:27:11.722	2024-08-18 14:28:31.669	e8a0dce8-ec45-4563-9769-391f5689538a
d4b1a2d8-e468-4a6c-97a9-bcee76e33c10	user_2kcPX2xqB4NwKSrCXG3dX5Pbfx0	t	2024-08-18 19:14:50.431	2024-08-18 19:14:50.431	a3c71e87-24b9-4ee1-991c-c69d490accf1
\.


--
-- Name: Attachment Attachment_pkey; Type: CONSTRAINT; Schema: public; Owner: lms
--

ALTER TABLE ONLY public."Attachment"
    ADD CONSTRAINT "Attachment_pkey" PRIMARY KEY (id);


--
-- Name: Category Category_pkey; Type: CONSTRAINT; Schema: public; Owner: lms
--

ALTER TABLE ONLY public."Category"
    ADD CONSTRAINT "Category_pkey" PRIMARY KEY (id);


--
-- Name: Chapter Chapter_pkey; Type: CONSTRAINT; Schema: public; Owner: lms
--

ALTER TABLE ONLY public."Chapter"
    ADD CONSTRAINT "Chapter_pkey" PRIMARY KEY (id);


--
-- Name: Course Course_pkey; Type: CONSTRAINT; Schema: public; Owner: lms
--

ALTER TABLE ONLY public."Course"
    ADD CONSTRAINT "Course_pkey" PRIMARY KEY (id);


--
-- Name: MuxData MuxData_pkey; Type: CONSTRAINT; Schema: public; Owner: lms
--

ALTER TABLE ONLY public."MuxData"
    ADD CONSTRAINT "MuxData_pkey" PRIMARY KEY (id);


--
-- Name: Purchase Purchase_pkey; Type: CONSTRAINT; Schema: public; Owner: lms
--

ALTER TABLE ONLY public."Purchase"
    ADD CONSTRAINT "Purchase_pkey" PRIMARY KEY (id);


--
-- Name: StripeCustomer StripeCustomer_pkey; Type: CONSTRAINT; Schema: public; Owner: lms
--

ALTER TABLE ONLY public."StripeCustomer"
    ADD CONSTRAINT "StripeCustomer_pkey" PRIMARY KEY (id);


--
-- Name: UserProgress UserProgress_pkey; Type: CONSTRAINT; Schema: public; Owner: lms
--

ALTER TABLE ONLY public."UserProgress"
    ADD CONSTRAINT "UserProgress_pkey" PRIMARY KEY (id);


--
-- Name: Category_name_key; Type: INDEX; Schema: public; Owner: lms
--

CREATE UNIQUE INDEX "Category_name_key" ON public."Category" USING btree (name);


--
-- Name: Course_categoryId_idx; Type: INDEX; Schema: public; Owner: lms
--

CREATE INDEX "Course_categoryId_idx" ON public."Course" USING btree ("categoryId");


--
-- Name: MuxData_chapterId_key; Type: INDEX; Schema: public; Owner: lms
--

CREATE UNIQUE INDEX "MuxData_chapterId_key" ON public."MuxData" USING btree ("chapterId");


--
-- Name: Purchase_courseId_idx; Type: INDEX; Schema: public; Owner: lms
--

CREATE INDEX "Purchase_courseId_idx" ON public."Purchase" USING btree ("courseId");


--
-- Name: Purchase_userId_courseId_key; Type: INDEX; Schema: public; Owner: lms
--

CREATE UNIQUE INDEX "Purchase_userId_courseId_key" ON public."Purchase" USING btree ("userId", "courseId");


--
-- Name: StripeCustomer_stripeCustomerId_key; Type: INDEX; Schema: public; Owner: lms
--

CREATE UNIQUE INDEX "StripeCustomer_stripeCustomerId_key" ON public."StripeCustomer" USING btree ("stripeCustomerId");


--
-- Name: StripeCustomer_userId_key; Type: INDEX; Schema: public; Owner: lms
--

CREATE UNIQUE INDEX "StripeCustomer_userId_key" ON public."StripeCustomer" USING btree ("userId");


--
-- Name: UserProgress_chapterId_idx; Type: INDEX; Schema: public; Owner: lms
--

CREATE INDEX "UserProgress_chapterId_idx" ON public."UserProgress" USING btree ("chapterId");


--
-- Name: UserProgress_userId_chapterId_key; Type: INDEX; Schema: public; Owner: lms
--

CREATE UNIQUE INDEX "UserProgress_userId_chapterId_key" ON public."UserProgress" USING btree ("userId", "chapterId");


--
-- Name: Attachment Attachment_courseId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: lms
--

ALTER TABLE ONLY public."Attachment"
    ADD CONSTRAINT "Attachment_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES public."Course"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: Chapter Chapter_courseId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: lms
--

ALTER TABLE ONLY public."Chapter"
    ADD CONSTRAINT "Chapter_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES public."Course"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: Course Course_categoryId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: lms
--

ALTER TABLE ONLY public."Course"
    ADD CONSTRAINT "Course_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES public."Category"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: MuxData MuxData_chapterId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: lms
--

ALTER TABLE ONLY public."MuxData"
    ADD CONSTRAINT "MuxData_chapterId_fkey" FOREIGN KEY ("chapterId") REFERENCES public."Chapter"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: Purchase Purchase_courseId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: lms
--

ALTER TABLE ONLY public."Purchase"
    ADD CONSTRAINT "Purchase_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES public."Course"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: UserProgress UserProgress_chapterId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: lms
--

ALTER TABLE ONLY public."UserProgress"
    ADD CONSTRAINT "UserProgress_chapterId_fkey" FOREIGN KEY ("chapterId") REFERENCES public."Chapter"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- PostgreSQL database dump complete
--

