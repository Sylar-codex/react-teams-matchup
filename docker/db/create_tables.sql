-- Creation of teams_name table
CREATE TABLE IF NOT EXISTS nba_team (
	id SERIAL PRIMARY KEY,
	team_name VARCHAR (50),
	conference_name VARCHAR (50),
	division_name VARCHAR (50),
	founded_date VARCHAR (50),
	team_colors VARCHAR (50),
	team_locale VARCHAR (50),
	head_coach VARCHAR (50),
	championship_wins VARCHAR (50),
	conference_wins VARCHAR (4),
	division_titles VARCHAR (4),
	retired_numbers VARCHAR (3),
	url_link VARCHAR (50),
    UNIQUE (founded_date, team_colors, url_link)
);
