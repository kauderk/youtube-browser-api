def get_popular_moments(data):
    popular_moments = []
    max_score = -1
    for moment in data:
        start = moment["start"]
        end = moment["end"]
        score = moment["value"]
        if score > max_score:
            popular_moments = [(start, end)]
            max_score = score
        elif score == max_score:
            popular_moments.append((start, end))
    return popular_moments


input_data = [{"start":0,"end":1130,"value":1},{"start":1130,"end":1130,"value":0.6931619140266353},{"start":2260,"end":1130,"value":0.7665937358039919},{"start":3390,"end":1130,"value":0.7757196274620811},{"start":4520,"end":1130,"value":0.6349275851194229}]

print(get_popular_moments(input_data))