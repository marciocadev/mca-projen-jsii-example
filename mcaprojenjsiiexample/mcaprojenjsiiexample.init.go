package mcaprojenjsiiexample

import (
	"reflect"

	_jsii_ "github.com/aws/jsii-runtime-go/runtime"
)

func init() {
	_jsii_.RegisterClass(
		"mca-projen-jsii-example.Hello",
		reflect.TypeOf((*Hello)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberMethod{JsiiMethod: "sayHello", GoMethod: "SayHello"},
		},
		func() interface{} {
			return &jsiiProxy_Hello{}
		},
	)
}
