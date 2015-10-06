function say(string, lang="eng") {
	var dictionary = getDictionary(lang);
	return dictionary[ string ];
}