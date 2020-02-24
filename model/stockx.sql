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
--
-- Name: stockx; Type: DATABASE; Schema: -; Owner: postgres_node_stockx
--

ALTER DATABASE stockx OWNER TO postgres_node_stockx;

\connect stockx

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

--
-- Name: root_schema; Type: SCHEMA; Schema: -; Owner: postgres_node_stockx
--

CREATE SCHEMA public_schema;


ALTER SCHEMA public_schema OWNER TO postgres_node_stockx;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: shoes; Type: TABLE; Schema: public; Owner: postgres_node_stockx
--

CREATE TABLE public.shoes (
    id integer NOT NULL,
    name character varying NOT NULL,
    sizes json NOT NULL,
    calculation double precision NOT NULL
);


ALTER TABLE public.shoes OWNER TO postgres_node_stockx;

--
-- Name: shoes_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres_node_stockx
--

CREATE SEQUENCE public.shoes_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.shoes_id_seq OWNER TO postgres_node_stockx;

--
-- Name: shoes_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres_node_stockx
--

ALTER SEQUENCE public.shoes_id_seq OWNED BY public.shoes.id;


--
-- Name: shoes; Type: TABLE; Schema: public_schema; Owner: postgres_node_stockx
--

CREATE TABLE public_schema.shoes (
    id character(1) NOT NULL,
    name character(1) NOT NULL,
    data integer[] NOT NULL,
    calculation double precision NOT NULL
);


ALTER TABLE public_schema.shoes OWNER TO postgres_node_stockx;

--
-- Name: shoes id; Type: DEFAULT; Schema: public; Owner: postgres_node_stockx
--

ALTER TABLE ONLY public.shoes ALTER COLUMN id SET DEFAULT nextval('public.shoes_id_seq'::regclass);


--
-- Data for Name: shoes; Type: TABLE DATA; Schema: public; Owner: postgres_node_stockx
--



--
-- Data for Name: shoes; Type: TABLE DATA; Schema: public_schema; Owner: postgres_node_stockx
--



--
-- Name: shoes_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres_node_stockx
--

SELECT pg_catalog.setval('public.shoes_id_seq', 3, true);


--
-- Name: shoes shoes_pk; Type: CONSTRAINT; Schema: public; Owner: postgres_node_stockx
--

ALTER TABLE ONLY public.shoes
    ADD CONSTRAINT shoes_pk PRIMARY KEY (id);


--
-- Name: shoes shoes_pk; Type: CONSTRAINT; Schema: public_schema; Owner: postgres_node_stockx
--

ALTER TABLE ONLY public_schema.shoes
    ADD CONSTRAINT shoes_pk PRIMARY KEY (id);


--
-- Name: shoes_id_uindex; Type: INDEX; Schema: public; Owner: postgres_node_stockx
--

CREATE UNIQUE INDEX shoes_id_uindex ON public.shoes USING btree (id);


--
-- Name: shoes_id_uindex; Type: INDEX; Schema: public_schema; Owner: postgres_node_stockx
--

CREATE UNIQUE INDEX shoes_id_uindex ON public_schema.shoes USING btree (id);


