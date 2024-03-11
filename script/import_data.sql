BEGIN;

-- Insertion dans la table 'noun'
INSERT INTO name (label) VALUES
('un cheval'),
('la mairie de Neuilly-sur-Seine'),
('une huître'),
('Julie Andrieu'),
('Jacky et sa Subaru Impreza'),
('la gendarmerie hollandaise'),
('un chauve'),
('Simon'),
('2 chatons');

-- Insertion dans la table 'adjective'
INSERT INTO adjective (label) VALUES
('bien cuit'),
('blond'),
('guilleret'),
('ankylosé'),
('blafard'),
('rasé de près'),
('amputé d''un doigt');

-- Insertion dans la table 'verb'
INSERT INTO verb (label) VALUES
('consulte'),
('franchit'),
('cuisine'),
('remet en question'),
('s''immole pour protester contre'),
('enduit de confiture'),
('instaure'),
('déguste');

-- Insertion dans la table 'complement'
INSERT INTO complement (label) VALUES
('un seau en plastique'),
('la consommation de café'),
('Yann'),
('3 roues de voiture'),
('2 mains gauches'),
('un skieur débutant'),
('la Mer Noire');

INSERT INTO public.sentence(sentence, name_id, verb_id, complement_id, adjective_id)
SELECT n.label || ' ' || c.label || ' ' || a.label || ' ' || v.label as sentence,
       n.id as name_id,
       v.id as verb_id,
       c.id as complement_id,
       a.id as adjective_id
FROM name n, adjective a, verb v, complement c;

COMMIT;