//si vous êtes sur une version angular js inferieur à la 1.4 
// cherchez dans votre angular.js la fonction "LimitToFilter" et remplacez la par ce code

function limitToFilter() {
		return function (input, limit, begin) {
			if (!begin) begin = 0;
			if (!isArray(input) && !isString(input)) return input;

			if (Math.abs(Number(limit)) === Infinity) {
				limit = Number(limit);
			} else {
				limit = int(limit);
			}

			if (isString(input)) {
				//NaN check on limit
				if (limit) {
					return limit >= 0 ? input.slice(0, limit) : input.slice(limit, input.length);
				} else {
					return "";
				}
			}

			var out = [],
			  i, n;

			// if abs(limit) exceeds maximum length, trim it
			if (limit > input.length)
				limit = input.length;
			else if (limit < -input.length)
				limit = -input.length;

			if (limit > 0) {
				i = 0;
				n = limit;
			} else {
				i = input.length + limit;
				n = input.length;
			}

			for (; i < n; i++) {
				if (input[i + begin])
				out.push(input[i+begin]);
			}

			return out;
		};
	}
