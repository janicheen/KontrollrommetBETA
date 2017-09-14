class ProcessObject(models.Model):

class InitiationItem(models.Model): #subject: we need to fix the door
	entity = models.ForeignKey(Entity)
	_property = models.ForeignKey(Property)
	person
	 = models.ManyToManyField(xxx) 
class PlanningItem(models.Model): #meetingsubject: door needs fixing
	entity = models.ForeignKey(Entity)
	_property = models.ForeignKey(Property)
	 = models.ManyToManyField(xxx) 
class DecisionItem(models.Model): #approved: start door fixing
	entity = models.ForeignKey(Entity)
	_property = models.ForeignKey(Property)
	 = models.ManyToManyField(xxx) 
class ActionItem(models.Model): #task: hire door fixer
	entity = models.ForeignKey(Entity)
	_property = models.ForeignKey(Property)
	 = models.ManyToManyField(xxx) 
class ResultItem(models.Model): #invoice: door fix bill
	entity = models.ForeignKey(Entity)
	_property = models.ForeignKey(Property)
	 = models.ManyToManyField(xxx)
